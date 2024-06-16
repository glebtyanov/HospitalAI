import React from "react";

import { Header, DoctorInfo, Navbar, AdminForm } from "@components";

const Doctor = () => {
  return (
    <>
      <Navbar />
      <h1>Добро пожаловать в панель Администратора!</h1>
      <AdminForm />
    </>
  );
};

export default Doctor;
