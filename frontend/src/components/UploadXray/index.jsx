import React from "react";
import styled from "styled-components";

// Создание стилей для компонента формы загрузки фотографии
const UploadFormWrapper = styled.div`
  background-color: rgb(39, 83, 70); /* цвет фона */
  color: rgb(47, 161, 127); /* цвет текста */
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const UploadFormContainer = styled.div`
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* тень */
  color: white;
`;

const UploadInput = styled.input`
  width: 100%;
  margin-bottom: 20px;
`;

const UploadButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(47, 161, 127);
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

// Создание компонента формы загрузки фотографии
const UploadXray = () => {
  return (
    <UploadFormWrapper>
      <UploadFormContainer>
        <h2>Загрузить фотографию</h2>
        <UploadInput type="file" accept="image/*" />
        <UploadButton>Загрузить</UploadButton>
      </UploadFormContainer>
    </UploadFormWrapper>
  );
};

export default UploadXray;
