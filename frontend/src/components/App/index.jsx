import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "@components";
import { Doctor, Patient, XrayAnalysis, Login, Admin } from "@pages";

import { GlobalStyle } from "./styled";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
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
      </BrowserRouter>
    </>
  );
};

export default App;
