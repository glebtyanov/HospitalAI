import React, { useState, useEffect } from "react";
import user from "@assets/images/user.png";

import {
  PersonCardList,
  PersonCardWrapper,
  Avatar,
  PersonInfo,
  Name,
  Position,
  Company,
} from "./styled.js";

const PatientInfo = ({ searchQuery }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("https://localhost:7175/Patients");
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        alert("Error fetching patients");
      }
    };

    fetchPatients();
  }, []);

  const filteredPatients = patients.filter((patient) =>
    patient.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PersonCardList>
      {filteredPatients.map((patient) => (
        <PersonCardWrapper key={patient.fullName}>
          <Avatar src={user} alt="user" />
          <PersonInfo>
            <Name>ФИО: {patient.fullName}</Name>
            <Name>Дата рождения: 28.03.1993</Name>
            <Position>Диагноз: Сколеоз 1-й степени</Position>
            <Company>Место работы: ОАО "Моготекс"</Company>
          </PersonInfo>
        </PersonCardWrapper>
      ))}
    </PersonCardList>
  );
};

export default PatientInfo;
