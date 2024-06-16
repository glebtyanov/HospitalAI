import React, { useState, useEffect } from "react";

import {
  fetchXrays,
  createXray,
  updateXray,
  deleteXray,
} from "../../services/api";

import {
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  Button,
  Input,
} from "./styled";

const XraysTable = () => {
  const [xrays, setXrays] = useState([]);
  const [editingXray, setEditingXray] = useState(null);
  const [newXray, setNewXray] = useState({
    xrayCode: "",
    xrayFileIndex: "",
  });

  useEffect(() => {
    fetchXrays()
      .then((response) => {
        setXrays(response.data);
      })
      .catch((error) => {
        console.error("Error fetching xrays:", error);
      });
  }, []);

  const handleCreate = () => {
    createXray(newXray)
      .then(() => {
        fetchXrays().then((response) => setXrays(response.data));
        setNewXray({
          xrayCode: "",
          xrayFileIndex: "",
        });
      })
      .catch((error) => {
        console.error("Error creating xray:", error);
      });
  };

  const handleUpdate = (id) => {
    updateXray(id, editingXray)
      .then(() => {
        fetchXrays().then((response) => setXrays(response.data));
        setEditingXray(null);
      })
      .catch((error) => {
        console.error("Error updating xray:", error);
      });
  };

  const handleDelete = (id) => {
    deleteXray(id)
      .then(() => {
        fetchXrays().then((response) => setXrays(response.data));
      })
      .catch((error) => {
        console.error("Error deleting xray:", error);
      });
  };

  return (
    <TableContainer>
      <h2>Таблица Xrays</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Xray Code</TableHeader>
            <TableHeader>Xray File Index</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {xrays.map((xray) => (
            <tr key={xray.xrayId}>
              <TableCell>{xray.xrayId}</TableCell>
              <TableCell>
                {editingXray?.xrayId === xray.xrayId ? (
                  <Input
                    value={editingXray.xrayCode}
                    onChange={(e) =>
                      setEditingXray({
                        ...editingXray,
                        xrayCode: e.target.value,
                      })
                    }
                  />
                ) : (
                  xray.xrayCode
                )}
              </TableCell>
              <TableCell>
                {editingXray?.xrayId === xray.xrayId ? (
                  <Input
                    value={editingXray.xrayFileIndex}
                    onChange={(e) =>
                      setEditingXray({
                        ...editingXray,
                        xrayFileIndex: e.target.value,
                      })
                    }
                  />
                ) : (
                  xray.xrayFileIndex
                )}
              </TableCell>
              <TableCell>
                {editingXray?.xrayId === xray.xrayId ? (
                  <Button onClick={() => handleUpdate(xray.xrayId)}>
                    Save
                  </Button>
                ) : (
                  <Button onClick={() => setEditingXray(xray)}>Edit</Button>
                )}
                <Button onClick={() => handleDelete(xray.xrayId)}>
                  Delete
                </Button>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3>Create new Xray</h3>
      <Input
        placeholder="Xray Code"
        value={newXray.xrayCode}
        onChange={(e) => setNewXray({ ...newXray, xrayCode: e.target.value })}
      />
      <Input
        placeholder="Xray File Index"
        value={newXray.xrayFileIndex}
        onChange={(e) =>
          setNewXray({ ...newXray, xrayFileIndex: e.target.value })
        }
      />
      <Button onClick={handleCreate}>Create</Button>
    </TableContainer>
  );
};

export default XraysTable;
