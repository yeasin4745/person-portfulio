import express, { Router, Request, Response } from "express";
import multer from "multer";
import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";

const router = Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = path.join(process.cwd(), "uploads");
    try {
      await fs.mkdir(uploadDir, { recursive: true });
      cb(null, uploadDir);
    } catch (error) {
      cb(error as Error, uploadDir);
    }
  },
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow common file types
    const allowedMimes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/plain",
      "video/mp4",
      "video/webm",
      "audio/mpeg",
      "audio/wav",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(`File type ${file.mimetype} not allowed`));
    }
  },
});

// Upload file endpoint
router.post("/upload", upload.single("file"), async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const fileInfo = {
      id: req.file.filename.split("-")[0],
      name: req.file.originalname,
      filename: req.file.filename,
      size: req.file.size,
      mimetype: req.file.mimetype,
      uploadedAt: new Date().toISOString(),
      url: `/api/files/download/${req.file.filename}`,
    };

    res.json(fileInfo);
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "File upload failed" });
  }
});

// Download file endpoint
router.get("/download/:filename", async (req: Request, res: Response) => {
  try {
    const filename = req.params.filename;
    const filepath = path.join(process.cwd(), "uploads", filename);

    // Security: prevent directory traversal
    const normalizedPath = path.normalize(filepath);
    const uploadsDir = path.normalize(path.join(process.cwd(), "uploads"));

    if (!normalizedPath.startsWith(uploadsDir)) {
      return res.status(403).json({ error: "Access denied" });
    }

    // Check if file exists
    await fs.access(filepath);

    res.download(filepath);
  } catch (error) {
    console.error("Download error:", error);
    res.status(404).json({ error: "File not found" });
  }
});

// List files endpoint
router.get("/list", async (req: Request, res: Response) => {
  try {
    const uploadsDir = path.join(process.cwd(), "uploads");

    try {
      await fs.access(uploadsDir);
    } catch {
      return res.json([]);
    }

    const files = await fs.readdir(uploadsDir);
    const fileInfos = await Promise.all(
      files.map(async (filename) => {
        const filepath = path.join(uploadsDir, filename);
        const stat = await fs.stat(filepath);

        return {
          id: filename.split("-")[0],
          filename,
          name: filename.substring(filename.indexOf("-") + 1),
          size: stat.size,
          uploadedAt: stat.mtime.toISOString(),
          url: `/api/files/download/${filename}`,
        };
      })
    );

    res.json(fileInfos);
  } catch (error) {
    console.error("List files error:", error);
    res.status(500).json({ error: "Failed to list files" });
  }
});

// Delete file endpoint
router.delete("/delete/:filename", async (req: Request, res: Response) => {
  try {
    const filename = req.params.filename;
    const filepath = path.join(process.cwd(), "uploads", filename);

    // Security: prevent directory traversal
    const normalizedPath = path.normalize(filepath);
    const uploadsDir = path.normalize(path.join(process.cwd(), "uploads"));

    if (!normalizedPath.startsWith(uploadsDir)) {
      return res.status(403).json({ error: "Access denied" });
    }

    await fs.unlink(filepath);
    res.json({ success: true, message: "File deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ error: "Failed to delete file" });
  }
});

export default router;
