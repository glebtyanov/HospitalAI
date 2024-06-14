import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 30px;
  background-color: #c1ba9f;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(39, 83, 70);
  border-radius: 14px;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: rgb(47, 150, 127);
  }
`;
