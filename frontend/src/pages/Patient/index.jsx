import React, { useState } from "react";

import { PatientInfo, Search, Navbar } from "@components";

const Patient = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Navbar />
      <Search onSearch={handleSearch} />
      <PatientInfo searchQuery={searchQuery} />
    </>
  );
};

export default Patient;
