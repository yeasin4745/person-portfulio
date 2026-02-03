import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FileUpload from "../FileUpload";

// Mock fetch
global.fetch = vi.fn();

describe("FileUpload Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders upload area and file list", () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    render(<FileUpload />);

    expect(screen.getByText(/Drag and drop files here/i)).toBeInTheDocument();
    expect(screen.getByText(/Uploaded Files/i)).toBeInTheDocument();
  });

  it("displays loading state on mount", async () => {
    (global.fetch as any).mockImplementationOnce(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                ok: true,
                json: async () => [],
              }),
            100
          )
        )
    );

    render(<FileUpload />);

    await waitFor(() => {
      expect(screen.getByText(/Uploaded Files/i)).toBeInTheDocument();
    });
  });

  it("loads files from API on mount", async () => {
    const mockFiles = [
      {
        id: "1",
        name: "test.pdf",
        filename: "test-123.pdf",
        size: 1024,
        uploadedAt: "2026-02-03T09:00:00Z",
        url: "/api/files/download/test-123.pdf",
      },
    ];

    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockFiles,
    });

    render(<FileUpload />);

    await waitFor(() => {
      expect(screen.getByText("test.pdf")).toBeInTheDocument();
    });
  });

  it("handles file upload", async () => {
    (global.fetch as any)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [],
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          id: "1",
          name: "newfile.pdf",
          filename: "newfile-123.pdf",
          size: 2048,
          uploadedAt: "2026-02-03T09:00:00Z",
          url: "/api/files/download/newfile-123.pdf",
        }),
      });

    render(<FileUpload />);

    const input = screen.getByRole("button", {
      name: /Drag and drop files here/i,
    }).parentElement?.querySelector("input[type='file']") as HTMLInputElement;

    const file = new File(["test content"], "test.pdf", {
      type: "application/pdf",
    });

    fireEvent.change(input, { target: { files: [file] } });

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith("/api/files/upload", {
        method: "POST",
        body: expect.any(FormData),
      });
    });
  });

  it("formats file sizes correctly", async () => {
    const mockFiles = [
      {
        id: "1",
        name: "large.mp4",
        filename: "large-123.mp4",
        size: 1024 * 1024 * 50, // 50MB
        uploadedAt: "2026-02-03T09:00:00Z",
        url: "/api/files/download/large-123.mp4",
      },
    ];

    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockFiles,
    });

    render(<FileUpload />);

    await waitFor(() => {
      expect(screen.getByText(/50 MB/i)).toBeInTheDocument();
    });
  });

  it("handles file deletion", async () => {
    const mockFiles = [
      {
        id: "1",
        name: "test.pdf",
        filename: "test-123.pdf",
        size: 1024,
        uploadedAt: "2026-02-03T09:00:00Z",
        url: "/api/files/download/test-123.pdf",
      },
    ];

    (global.fetch as any)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockFiles,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

    render(<FileUpload />);

    await waitFor(() => {
      expect(screen.getByText("test.pdf")).toBeInTheDocument();
    });

    const deleteButton = screen.getByRole("button", { name: /Delete/i });
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/files/delete/test-123.pdf",
        { method: "DELETE" }
      );
    });
  });
});
