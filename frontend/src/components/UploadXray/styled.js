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

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(47, 161, 127);
  color: rgb(255, 255, 255);
  cursor: pointer;
  margin-top: 10px;
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupContent = styled.div`
  position: relative;
  background: rgb(224 233 222);
  padding: 20px;
  border-radius: 5px;
  width: 500px;
  max-width: 80%;
  text-align: center;
`;

export const CloseIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: rgb(47, 161, 127);
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid rgb(47, 161, 127);
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: rgb(39, 83, 70);
  background-color: white;
`;

export const Textarea = styled.textarea`
  width: 90%;
  height: 200px;
  padding: 10px;
  border: 1px solid rgb(47, 161, 127);
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: rgb(39, 83, 70);
  background-color: white;
  resize: vertical;
`;
