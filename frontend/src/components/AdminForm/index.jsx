import React, { useState } from "react";

import {
  Sidebar,
  DiseasesTable,
  DoctorsTable,
  ExaminationsTable,
  PatientsTable,
  XraysTable,
} from "@components";

import { AdminContainer } from "./styled";

const AdminForm = () => {
  const [selectedTable, setSelectedTable] = useState("diseases");

  const handleSelectTable = (table) => {
    setSelectedTable(table);
  };

  const renderTable = () => {
    switch (selectedTable) {
      case "diseases":
        return <DiseasesTable />;
      case "doctors":
        return <DoctorsTable />;
      case "examinations":
        return <ExaminationsTable />;
      case "patients":
        return <PatientsTable />;
      case "xrays":
        return <XraysTable />;
      default:
        return null;
    }
  };

  return (
    <AdminContainer>
      <Sidebar onSelectTable={handleSelectTable} />
      {renderTable()}
    </AdminContainer>
  );
};

export default AdminForm;
