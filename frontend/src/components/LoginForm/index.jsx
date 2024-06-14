import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form, Input, Button } from "./styled";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await fetch("https://localhost:7175/Identity/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    });

    const data = await response.text();
    if (response.ok) {
      localStorage.setItem("token", data);
      navigate("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <h2>Войти в аккаунт</h2>
        <Input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Войти</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
