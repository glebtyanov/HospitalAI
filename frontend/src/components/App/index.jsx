import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Navbar, Header, Footer, ProtectedRoute } from "@components";
import { Doctor, Patient, XrayAnalysis, Login } from "@pages";

import { GlobalStyle } from "./styled";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Doctor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/patient"
            element={
              <ProtectedRoute>
                <Patient />
              </ProtectedRoute>
            }
          />
          <Route
            path="/xray-analysis"
            element={
              <ProtectedRoute>
                <XrayAnalysis />
              </ProtectedRoute>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
