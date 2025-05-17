"use client";
import { useState } from "react";

export default function practiseImg() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadResult, setUploadResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUploadResult(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button type="submit">Upload</button>
      </form>

      {uploadResult && (
        <div>
          <h4>Upload Result:</h4>
          <pre>{JSON.stringify(uploadResult, null, 2)}</pre>
          {uploadResult.secure_url && (
            <img src={uploadResult.secure_url} alt="Uploaded" width={200} />
          )}
        </div>
      )}
    </div>
  );
}
