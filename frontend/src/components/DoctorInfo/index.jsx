import React from "react";

import doctor from "@assets/images/doctor.png";

import {
  PersonCardWrapper,
  Avatar,
  PersonInfo,
  Name,
  Position,
  Company,
} from "./styled.js";

const DoctorInfo = () => {
  return (
    <PersonCardWrapper>
      <Avatar src={doctor} alt="doctor" />
      <PersonInfo>
        <Name>ФИО: Кутаев Антон Игоревич</Name>
        <Position>Должность: Врач-травмотолог</Position>
        <Company>
          Место работы: Могилёвская областная клиническая больница
        </Company>
      </PersonInfo>
    </PersonCardWrapper>
  );
};

export default DoctorInfo;
