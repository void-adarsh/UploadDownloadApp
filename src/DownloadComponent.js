import React, { useState } from "react";
import fileName from "./assets/resume.pdf";

const DownloadComponent = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const handlePreview = () => {
    window.open(fileUrl, "../assets/resume.pdf");
  };

  const handleDownload = () => {
    if (fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "file.pdf"; // Change the filename based on your needs
      link.click();
    }
  };

  const fetchFile = async () => {
    try {
      // Fetch the file URL from the API
      const response = await fetch("your-api-url");
      const fileData = await response.blob();

      // Create a temporary URL for the fetched file
      const url = URL.createObjectURL(fileData);
      setFileUrl(fileName);
    } catch (error) {
      console.error("Error fetching file:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchFile}>Fetch File</button>
      {fileUrl && (
        <div>
          <button onClick={handlePreview}>Preview</button>
          <button onClick={handleDownload}>Download</button>
          <div>
            <h2>Preview:</h2>
            <iframe
              src={fileUrl}
              width="100%"
              height="500px"
              title="File Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadComponent;
