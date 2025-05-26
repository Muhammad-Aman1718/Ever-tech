"use client";
import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Print = () => {
  const printRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (printRef.current) {
      const canvas = await html2canvas(printRef.current);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`printed-Profile.pdf`);
    }
  };

  return (
    <div>
      {/* Printable Area */}
      <div ref={printRef} className="p-4 bg-white text-black">
        <h2 className="text-xl font-bold mb-4">Student Profile</h2>
        <p>
          <strong>Full Name:</strong> fdsafdsa
        </p>
        <p>
          <strong>Email:</strong> fdsa
        </p>
        <p>
          <strong>Phone:</strong> fdsa
        </p>
        <p>
          <strong>City:</strong> fdsaf{" "}
        </p>
        <p>
          <strong>Course:</strong> fdsa
        </p>
        {/* Add other fields here */}
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Download PDF
      </button>
    </div>
  );
};

export default Print;
