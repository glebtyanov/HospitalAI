import React, { useState } from "react";

import {
  UploadFormWrapper,
  UploadFormContainer,
  UploadInput,
  UploadButton,
} from "./styled";

const UploadXray = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!file) {
      setError("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("https://localhost:7175/Ai/predict/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  return (
    <UploadFormWrapper>
      <UploadFormContainer onSubmit={handleSubmit}>
        <h2>Загрузить фотографию</h2>
        <UploadInput type="file" onChange={handleFileChange} />
        <UploadButton type="submit">Загрузить</UploadButton>
      </UploadFormContainer>
      {result && (
        <div>
          <h2>Prediction Result</h2>
          <p>Prediction: {result.prediction}</p>
          <p>Confidence: {result.confidence}%</p>
        </div>
      )}
      {error && <p style={{ color: "red", margin: "10px" }}>{error}</p>}
    </UploadFormWrapper>
  );
};

export default UploadXray;
