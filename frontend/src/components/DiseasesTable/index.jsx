import React, { useState, useEffect } from "react";

import {
  fetchDiseases,
  createDisease,
  updateDisease,
  deleteDisease,
} from "../../services/api";

import {
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  Button,
  Input,
} from "./styled";

const DiseasesTable = () => {
  const [diseases, setDiseases] = useState([]);
  const [editingDisease, setEditingDisease] = useState(null);
  const [newDisease, setNewDisease] = useState({ class: "", name: "" });

  useEffect(() => {
    fetchDiseases().then((response) => {
      setDiseases(response.data);
    });
  }, []);

  const handleCreate = () => {
    createDisease(newDisease).then(() => {
      fetchDiseases().then((response) => setDiseases(response.data));
      setNewDisease({ class: "", name: "" });
    });
  };

  const handleUpdate = (id) => {
    updateDisease(id, editingDisease).then(() => {
      fetchDiseases().then((response) => setDiseases(response.data));
      setEditingDisease(null);
    });
  };

  const handleDelete = (id) => {
    deleteDisease(id).then(() => {
      fetchDiseases().then((response) => setDiseases(response.data));
    });
  };

  return (
    <TableContainer>
      <h2>Таблица Diseases</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Class</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {diseases.map((disease) => (
            <tr key={disease.diseaseId}>
              <TableCell>{disease.diseaseId}</TableCell>
              <TableCell>
                {editingDisease?.diseaseId === disease.diseaseId ? (
                  <Input
                    value={editingDisease.class}
                    onChange={(e) =>
                      setEditingDisease({
                        ...editingDisease,
                        class: e.target.value,
                      })
                    }
                  />
                ) : (
                  disease.class
                )}
              </TableCell>
              <TableCell>
                {editingDisease?.diseaseId === disease.diseaseId ? (
                  <Input
                    value={editingDisease.name}
                    onChange={(e) =>
                      setEditingDisease({
                        ...editingDisease,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  disease.name
                )}
              </TableCell>
              <TableCell>
                {editingDisease?.diseaseId === disease.diseaseId ? (
                  <Button onClick={() => handleUpdate(disease.diseaseId)}>
                    Save
                  </Button>
                ) : (
                  <Button onClick={() => setEditingDisease(disease)}>
                    Edit
                  </Button>
                )}
                <Button onClick={() => handleDelete(disease.diseaseId)}>
                  Delete
                </Button>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3>Create new Disease</h3>
      <Input
        placeholder="Class"
        value={newDisease.class}
        onChange={(e) =>
          setNewDisease({ ...newDisease, class: e.target.value })
        }
      />
      <Input
        placeholder="Name"
        value={newDisease.name}
        onChange={(e) => setNewDisease({ ...newDisease, name: e.target.value })}
      />
      <Button onClick={handleCreate}>Create</Button>
    </TableContainer>
  );
};

export default DiseasesTable;
