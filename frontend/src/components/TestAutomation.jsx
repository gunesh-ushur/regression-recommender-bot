import React, { useState } from "react";
import axios from "axios";

const TestAutomation = () => {
  const [testCases, setTestCases] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  const backendUrl = process.env.VITE_GPT_API_BACKEND_URL || "http://localhost:8000";

  const generateAndDownloadXML = async () => {
    const formData = new FormData();
    formData.append("test_cases", testCases);

    try {
      const response = await axios.post(`${backendUrl}/generate_and_download_xml/`, formData);
      if (response.data.download_url) {
        setDownloadUrl(response.data.download_url);
      } else {
        alert("Failed to retrieve XML file.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to backend!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Test Automation - Generate & Download XML</h2>
      <input
        type="text"
        placeholder="Enter Test Cases (comma-separated)"
        value={testCases}
        onChange={(e) => setTestCases(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />
      <br /><br />
      <button onClick={generateAndDownloadXML} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Generate XML
      </button>

      {downloadUrl && (
        <div style={{ marginTop: "20px" }}>
          <h3>Download XML</h3>
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
            <button style={{ padding: "10px 20px", cursor: "pointer" }}>Download XML</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default TestAutomation;
