import React, { useState, useEffect } from "react";

import {
  fetchDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} from "../../services/api";

import {
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  Button,
  Input,
} from "./styled";

const DoctorTable = () => {
  const [doctors, setDoctors] = useState([]);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [newDoctor, setNewDoctor] = useState({
    fullName: "",
    login: "",
    password: "",
    position: "",
    workPlace: "",
    isAdmin: false,
  });

  useEffect(() => {
    fetchDoctors()
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);

  const handleCreate = () => {
    createDoctor(newDoctor)
      .then(() => {
        fetchDoctors().then((response) => setDoctors(response.data));
        setNewDoctor({
          fullName: "",
          login: "",
          password: "",
          position: "",
          workPlace: "",
          isAdmin: false,
        });
      })
      .catch((error) => {
        console.error("Error creating doctor:", error);
      });
  };

  const handleUpdate = (id) => {
    updateDoctor(id, editingDoctor)
      .then(() => {
        fetchDoctors().then((response) => setDoctors(response.data));
        setEditingDoctor(null);
      })
      .catch((error) => {
        console.error("Error updating doctor:", error);
      });
  };

  const handleDelete = (id) => {
    deleteDoctor(id)
      .then(() => {
        fetchDoctors().then((response) => setDoctors(response.data));
      })
      .catch((error) => {
        console.error("Error deleting doctor:", error);
      });
  };

  return (
    <TableContainer>
      <h2>Таблица Doctors</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Full Name</TableHeader>
            <TableHeader>Login</TableHeader>
            <TableHeader>Password</TableHeader>
            <TableHeader>Position</TableHeader>
            <TableHeader>Work Place</TableHeader>
            <TableHeader>Is Admin</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.doctorId}>
              <TableCell>{doctor.doctorId}</TableCell>
              <TableCell>
                {editingDoctor?.doctorId === doctor.doctorId ? (
                  <Input
                    value={editingDoctor.fullName}
                    onChange={(e) =>
                      setEditingDoctor({
                        ...editingDoctor,
                        fullName: e.target.value,
                      })
                    }
                  />
                ) : (
                  doctor.fullName
                )}
              </TableCell>
              <TableCell>
                {editingDoctor?.doctorId === doctor.doctorId ? (
                  <Input
                    value={editingDoctor.login}
                    onChange={(e) =>
                      setEditingDoctor({
                        ...editingDoctor,
                        login: e.target.value,
                      })
                    }
                  />
                ) : (
                  doctor.login
                )}
              </TableCell>
              <TableCell>
                {editingDoctor?.doctorId === doctor.doctorId ? (
                  <Input
                    value={editingDoctor.password}
                    onChange={(e) =>
                      setEditingDoctor({
                        ...editingDoctor,
                        password: e.target.value,
                      })
                    }
                  />
                ) : (
                  doctor.password
                )}
              </TableCell>
              <TableCell>
                {editingDoctor?.doctorId === doctor.doctorId ? (
                  <Input
                    value={editingDoctor.position}
                    onChange={(e) =>
                      setEditingDoctor({
                        ...editingDoctor,
                        position: e.target.value,
                      })
                    }
                  />
                ) : (
                  doctor.position
                )}
              </TableCell>
              <TableCell>
                {editingDoctor?.doctorId === doctor.doctorId ? (
                  <Input
                    value={editingDoctor.workPlace}
                    onChange={(e) =>
                      setEditingDoctor({
                        ...editingDoctor,
                        workPlace: e.target.value,
                      })
                    }
                  />
                ) : (
                  doctor.workPlace
                )}
              </TableCell>
              <TableCell>
                {editingDoctor?.doctorId === doctor.doctorId ? (
                  <input
                    type="checkbox"
                    checked={editingDoctor.isAdmin}
                    onChange={(e) =>
                      setEditingDoctor({
                        ...editingDoctor,
                        isAdmin: e.target.checked,
                      })
                    }
                  />
                ) : (
                  <input type="checkbox" checked={doctor.isAdmin} disabled />
                )}
              </TableCell>
              <TableCell>
                {editingDoctor?.doctorId === doctor.doctorId ? (
                  <Button onClick={() => handleUpdate(doctor.doctorId)}>
                    Сохранить
                  </Button>
                ) : (
                  <Button onClick={() => setEditingDoctor(doctor)}>
                    Изменить
                  </Button>
                )}
                <Button onClick={() => handleDelete(doctor.doctorId)}>
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
        value={newDoctor.fullName}
        onChange={(e) =>
          setNewDoctor({ ...newDoctor, fullName: e.target.value })
        }
      />
      <Input
        placeholder="Login"
        value={newDoctor.login}
        onChange={(e) => setNewDoctor({ ...newDoctor, login: e.target.value })}
      />
      <Input
        placeholder="Password"
        value={newDoctor.password}
        onChange={(e) =>
          setNewDoctor({ ...newDoctor, password: e.target.value })
        }
      />
      <Input
        placeholder="Position"
        value={newDoctor.position}
        onChange={(e) =>
          setNewDoctor({ ...newDoctor, position: e.target.value })
        }
      />
      <Input
        placeholder="Work Place"
        value={newDoctor.workPlace}
        onChange={(e) =>
          setNewDoctor({ ...newDoctor, workPlace: e.target.value })
        }
      />
      <label>
        Is Admin
        <Input
          type="checkbox"
          checked={newDoctor.isAdmin}
          onChange={(e) =>
            setNewDoctor({ ...newDoctor, isAdmin: e.target.checked })
          }
        />
      </label>
      <Button onClick={handleCreate}>Создать</Button>
    </TableContainer>
  );
};

export default DoctorTable;
