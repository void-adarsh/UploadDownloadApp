import React, { useState } from "react";

const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await fetch("YOUR_API_ENDPOINT", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          // File uploaded successfully
          console.log("File uploaded successfully");
        } else {
          // Error occurred while uploading the file
          console.error("Error uploading file:", response.status);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div>
      <input
        style={{ margin: "10px" }}
        type="file"
        onChange={handleFileChange}
      />
      <button
        style={{
          padding: "10px",
          borderRadius: "5px",
        }}
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadComponent;
