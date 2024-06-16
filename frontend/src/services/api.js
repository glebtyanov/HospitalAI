import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7175",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const fetchDiseases = () => api.get("/Diseases");
export const createDisease = (data) => api.post("/Diseases", data);
export const updateDisease = (id, data) => api.put(`/Diseases/${id}`, data);
export const deleteDisease = (id) => api.delete(`/Diseases/${id}`);

export const fetchDoctors = () => api.get("/Doctors");
export const createDoctor = (data) => api.post("/Doctors", data);
export const updateDoctor = (id, data) => api.put(`/Doctors/${id}`, data);
export const deleteDoctor = (id) => api.delete(`/Doctors/${id}`);

export const fetchExaminations = () => api.get("/Examinations");
export const createExamination = (data) => api.post("/Examinations", data);
export const updateExamination = (id, data) =>
  api.put(`/examinations/${id}`, data);
export const deleteExamination = (id) => api.delete(`/Examinations/${id}`);

export const fetchPatients = () => api.get("/Patients");
export const createPatient = (data) => api.post("/Patients", data);
export const updatePatient = (id, data) => api.put(`/Patients/${id}`, data);
export const deletePatient = (id) => api.delete(`/Patients/${id}`);

export const fetchXrays = () => api.get("/Xrays");
export const createXray = (data) => api.post("/Xrays", data);
export const updateXray = (id, data) => api.put(`/Xrays/${id}`, data);
export const deleteXray = (id) => api.delete(`/Xrays/${id}`);
