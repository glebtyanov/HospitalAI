import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import {
  UploadFormWrapper,
  UploadFormContainer,
  UploadInput,
  UploadButton,
  PopupContainer,
  PopupContent,
  ConfirmButton,
  CloseIcon,
  Select,
  Textarea,
} from "./styled";

const UploadXray = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [patients, setPatients] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [doctor, setDoctor] = useState(null);

  const popupRef = useRef();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("https://localhost:7175/Patients");
        setPatients(response.data);
      } catch (error) {
        setError("Failed to fetch patients.");
      }
    };

    const fetchDoctor = async () => {
      const doctorId = localStorage.getItem("doctorId");
      try {
        const response = await axios.get(
          `https://localhost:7175/Doctors/${doctorId}`
        );
        setDoctor(response.data);
      } catch (error) {
        setError("Failed to fetch doctor info.");
      }
    };

    fetchPatients();
    fetchDoctor();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

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
      const response = await axios.post(
        "https://localhost:7175/Ai/predict/",
        formData
      );
      setResult(response.data);
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  const handleConfirm = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleDiagnosisChange = (e) => {
    setDiagnosis(e.target.value);
  };

  const handlePatientChange = (e) => {
    setSelectedPatientId(e.target.value);
  };

  const handleDiagnosisSubmit = async () => {
    const doctorId = localStorage.getItem("doctorId");
    const diseaseId = 3;
    const newExamination = {
      patientId: selectedPatientId,
      doctorId: doctorId,
      diseaseId: diseaseId,
      conclusion: diagnosis,
      examinationDate: new Date().toISOString(),
    };

    try {
      const response = await axios.post(
        "https://localhost:7175/Examinations",
        newExamination
      );
      console.log("Diagnosis submitted:", diagnosis);
      setShowPopup(false);
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
        <div style={{ margin: "10px" }}>
          <h2>Предварительное заключение</h2>
          <p>Диагноз: {result.prediction}</p>
          <p>Вероятность диагноза: {result.confidence}%</p>
          <ConfirmButton onClick={handleConfirm}>Подтвердить</ConfirmButton>
        </div>
      )}
      {error && <p style={{ color: "red", margin: "10px" }}>{error}</p>}
      {showPopup && (
        <PopupContainer>
          <PopupContent ref={popupRef}>
            <CloseIcon onClick={handleClosePopup}>&times;</CloseIcon>
            <h2>Заключение диагноза</h2>
            <div>
              <label>Пациент:</label>
              <Select value={selectedPatientId} onChange={handlePatientChange}>
                <option value="">Выберите пациента</option>
                {patients.map((patient) => (
                  <option key={patient.patientId} value={patient.patientId}>
                    {patient.fullName}
                  </option>
                ))}
              </Select>
            </div>
            {doctor && (
              <div>
                <p>Врач: {doctor.fullName}</p>
                <p>Должность: {doctor.position}</p>
              </div>
            )}
            <Textarea
              value={diagnosis}
              onChange={handleDiagnosisChange}
              placeholder="Введите диагноз здесь..."
            />
            <ConfirmButton onClick={handleDiagnosisSubmit}>
              Подтвердить диагноз
            </ConfirmButton>
          </PopupContent>
        </PopupContainer>
      )}
    </UploadFormWrapper>
  );
};

export default UploadXray;
