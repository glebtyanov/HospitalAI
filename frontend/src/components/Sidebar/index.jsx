import React from "react";
import { SidebarContainer, SidebarItem } from "./styled";

const Sidebar = ({ onSelectTable }) => {
  const handleSelectDiseases = () => {
    onSelectTable("diseases");
  };

  const handleSelectDoctors = () => {
    onSelectTable("doctors");
  };

  const handleSelectExaminations = () => {
    onSelectTable("examinations");
  };

  const handleSelectPatients = () => {
    onSelectTable("patients");
  };

  const handleSelectXrays = () => {
    onSelectTable("xrays");
  };

  return (
    <SidebarContainer>
      <SidebarItem onClick={handleSelectDiseases}>Diseases</SidebarItem>
      <SidebarItem onClick={handleSelectDoctors}>Doctors</SidebarItem>
      <SidebarItem onClick={handleSelectExaminations}>Examinations</SidebarItem>
      <SidebarItem onClick={handleSelectPatients}>Patients</SidebarItem>
      <SidebarItem onClick={handleSelectXrays}>Xrays</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
