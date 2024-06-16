import React, { useState, useEffect } from "react";

import {
  fetchExaminations,
  createExamination,
  updateExamination,
  deleteExamination,
} from "../../services/api";

import {
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  Button,
  Input,
} from "./styled";

const ExaminationTable = () => {
  const [examinations, setExaminations] = useState([]);
  const [editingExamination, setEditingExamination] = useState(null);
  const [newExamination, setNewExamination] = useState({
    patientId: "",
    doctorId: "",
    diseaseId: "",
    conclusion: "",
    examinationDate: "",
  });

  useEffect(() => {
    fetchExaminations()
      .then((response) => {
        setExaminations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching examinations:", error);
      });
  }, []);

  const handleCreate = () => {
    createExamination(newExamination)
      .then(() => {
        fetchExaminations().then((response) => setExaminations(response.data));
        setNewExamination({
          patientId: "",
          doctorId: "",
          diseaseId: "",
          conclusion: "",
          examinationDate: "",
        });
      })
      .catch((error) => {
        console.error("Error creating examination:", error);
      });
  };

  const handleUpdate = (id) => {
    updateExamination(id, editingExamination)
      .then(() => {
        fetchExaminations().then((response) => setExaminations(response.data));
        setEditingExamination(null);
      })
      .catch((error) => {
        console.error("Error updating examination:", error);
      });
  };

  const handleDelete = (id) => {
    deleteExamination(id)
      .then(() => {
        fetchExaminations().then((response) => setExaminations(response.data));
      })
      .catch((error) => {
        console.error("Error deleting examination:", error);
      });
  };

  return (
    <TableContainer>
      <h2>Examinations</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Patient ID</TableHeader>
            <TableHeader>Doctor ID</TableHeader>
            <TableHeader>Disease ID</TableHeader>
            <TableHeader>Conclusion</TableHeader>
            <TableHeader>Examination Date</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {examinations.map((examination) => (
            <tr key={examination.examinationId}>
              <TableCell>{examination.examinationId}</TableCell>
              <TableCell>
                {editingExamination?.examinationId ===
                examination.examinationId ? (
                  <Input
                    value={editingExamination.patientId}
                    onChange={(e) =>
                      setEditingExamination({
                        ...editingExamination,
                        patientId: e.target.value,
                      })
                    }
                  />
                ) : (
                  examination.patientId
                )}
              </TableCell>
              <TableCell>
                {editingExamination?.examinationId ===
                examination.examinationId ? (
                  <Input
                    value={editingExamination.doctorId}
                    onChange={(e) =>
                      setEditingExamination({
                        ...editingExamination,
                        doctorId: e.target.value,
                      })
                    }
                  />
                ) : (
                  examination.doctorId
                )}
              </TableCell>
              <TableCell>
                {editingExamination?.examinationId ===
                examination.examinationId ? (
                  <Input
                    value={editingExamination.diseaseId}
                    onChange={(e) =>
                      setEditingExamination({
                        ...editingExamination,
                        diseaseId: e.target.value,
                      })
                    }
                  />
                ) : (
                  examination.diseaseId
                )}
              </TableCell>
              <TableCell>
                {editingExamination?.examinationId ===
                examination.examinationId ? (
                  <Input
                    value={editingExamination.conclusion}
                    onChange={(e) =>
                      setEditingExamination({
                        ...editingExamination,
                        conclusion: e.target.value,
                      })
                    }
                  />
                ) : (
                  examination.conclusion
                )}
              </TableCell>
              <TableCell>
                {editingExamination?.examinationId ===
                examination.examinationId ? (
                  <Input
                    value={editingExamination.examinationDate}
                    onChange={(e) =>
                      setEditingExamination({
                        ...editingExamination,
                        examinationDate: e.target.value,
                      })
                    }
                  />
                ) : (
                  examination.examinationDate
                )}
              </TableCell>
              <TableCell>
                {editingExamination?.examinationId ===
                examination.examinationId ? (
                  <Button
                    onClick={() => handleUpdate(examination.examinationId)}
                  >
                    Save
                  </Button>
                ) : (
                  <Button onClick={() => setEditingExamination(examination)}>
                    Edit
                  </Button>
                )}
                <Button onClick={() => handleDelete(examination.examinationId)}>
                  Delete
                </Button>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3>Create new Examination</h3>
      <Input
        placeholder="Patient ID"
        value={newExamination.patientId}
        onChange={(e) =>
          setNewExamination({ ...newExamination, patientId: e.target.value })
        }
      />
      <Input
        placeholder="Doctor ID"
        value={newExamination.doctorId}
        onChange={(e) =>
          setNewExamination({ ...newExamination, doctorId: e.target.value })
        }
      />
      <Input
        placeholder="Disease ID"
        value={newExamination.diseaseId}
        onChange={(e) =>
          setNewExamination({ ...newExamination, diseaseId: e.target.value })
        }
      />
      <Input
        placeholder="Conclusion"
        value={newExamination.conclusion}
        onChange={(e) =>
          setNewExamination({ ...newExamination, conclusion: e.target.value })
        }
      />
      <Input
        placeholder="Examination Date"
        value={newExamination.examinationDate}
        onChange={(e) =>
          setNewExamination({
            ...newExamination,
            examinationDate: e.target.value,
          })
        }
      />
      <Button onClick={handleCreate}>Create</Button>
    </TableContainer>
  );
};

export default ExaminationTable;
