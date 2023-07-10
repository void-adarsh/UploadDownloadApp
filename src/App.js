import React from "react";
import UploadComponent from "./UploadComponent";
import DownloadComponent from "./DownloadComponent";

const App = () => {
  return (
    <div>
      <h1 style={{ margin: "10px" }}>Upload File</h1>
      <UploadComponent />
      <h1 style={{ margin: "10px" }}>Download File</h1>
      <DownloadComponent />
    </div>
  );
};

export default App;
