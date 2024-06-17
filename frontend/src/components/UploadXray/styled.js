import styled from "styled-components";

export const UploadFormWrapper = styled.div`
  background-color: rgb(39, 83, 70);
  color: rgb(47, 161, 127);
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const UploadFormContainer = styled.form`
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
`;

export const UploadInput = styled.input`
  width: 100%;
  margin-bottom: 20px;
`;

export const UploadButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(47, 161, 127);
  color: rgb(255, 255, 255);
  cursor: pointer;
`;
