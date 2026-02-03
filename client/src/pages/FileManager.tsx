import React from "react";
import FileUpload from "@/components/FileUpload";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FileManager() {
  return (
    <div className="min-h-screen w-full bg-[#030014] text-white overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col gap-0 pt-20">
        <section className="w-full px-4 py-20 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                File Storage Manager
              </h1>
              <p className="text-gray-400 text-lg">
                Upload, manage, and download your files securely. Organize your digital assets in one place.
              </p>
            </div>

            <FileUpload />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
