import React, { useState, useEffect } from "react";

import {
  fetchPatients,
  createPatient,
  updatePatient,
  deletePatient,
} from "../../services/api";

import {
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  Button,
  Input,
} from "./styled";

const PatientsTable = () => {
  const [patients, setPatients] = useState([]);
  const [editingPatient, setEditingPatient] = useState(null);
  const [newPatient, setNewPatient] = useState({
    fullName: "",
    birthDate: "",
    workPlace: "",
  });

  useEffect(() => {
    fetchPatients()
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      });
  }, []);

  const handleCreate = () => {
    createPatient(newPatient)
      .then(() => {
        fetchPatients().then((response) => setPatients(response.data));
        setNewPatient({
          fullName: "",
          birthDate: "",
          workPlace: "",
        });
      })
      .catch((error) => {
        console.error("Error creating patient:", error);
      });
  };

  const handleUpdate = (id) => {
    updatePatient(id, editingPatient)
      .then(() => {
        fetchPatients().then((response) => setPatients(response.data));
        setEditingPatient(null);
      })
      .catch((error) => {
        console.error("Error updating patient:", error);
      });
  };

  const handleDelete = (id) => {
    deletePatient(id)
      .then(() => {
        fetchPatients().then((response) => setPatients(response.data));
      })
      .catch((error) => {
        console.error("Error deleting patient:", error);
      });
  };

  return (
    <TableContainer>
      <h2>Таблица Patients</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Full Name</TableHeader>
            <TableHeader>Birth Date</TableHeader>
            <TableHeader>Work Place</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.patientId}>
              <TableCell>{patient.patientId}</TableCell>
              <TableCell>
                {editingPatient?.patientId === patient.patientId ? (
                  <Input
                    value={editingPatient.fullName}
                    onChange={(e) =>
                      setEditingPatient({
                        ...editingPatient,
                        fullName: e.target.value,
                      })
                    }
                  />
                ) : (
                  patient.fullName
                )}
              </TableCell>
              <TableCell>
                {editingPatient?.patientId === patient.patientId ? (
                  <Input
                    value={editingPatient.birthDate}
                    onChange={(e) =>
                      setEditingPatient({
                        ...editingPatient,
                        birthDate: e.target.value,
                      })
                    }
                  />
                ) : (
                  patient.birthDate
                )}
              </TableCell>
              <TableCell>
                {editingPatient?.patientId === patient.patientId ? (
                  <Input
                    value={editingPatient.workPlace}
                    onChange={(e) =>
                      setEditingPatient({
                        ...editingPatient,
                        workPlace: e.target.value,
                      })
                    }
                  />
                ) : (
                  patient.workPlace
                )}
              </TableCell>
              <TableCell>
                {editingPatient?.patientId === patient.patientId ? (
                  <Button onClick={() => handleUpdate(patient.patientId)}>
                    Сохранить
                  </Button>
                ) : (
                  <Button onClick={() => setEditingPatient(patient)}>
                    Изменить
                  </Button>
                )}
                <Button onClick={() => handleDelete(patient.patientId)}>
                  Удалить
                </Button>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3>Добавить запись</h3>
      <Input
        placeholder="Full Name"
        value={newPatient.fullName}
        onChange={(e) =>
          setNewPatient({ ...newPatient, fullName: e.target.value })
        }
      />
      <Input
        placeholder="Birth Date"
        value={newPatient.birthDate}
        onChange={(e) =>
          setNewPatient({ ...newPatient, birthDate: e.target.value })
        }
      />
      <Input
        placeholder="Work Place"
        value={newPatient.workPlace}
        onChange={(e) =>
          setNewPatient({ ...newPatient, workPlace: e.target.value })
        }
      />
      <Button onClick={handleCreate}>Создать</Button>
    </TableContainer>
  );
};

export default PatientsTable;
