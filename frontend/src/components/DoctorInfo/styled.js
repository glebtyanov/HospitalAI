import styled from "styled-components";

// Создание стилей для карточки человека
export const PersonCardWrapper = styled.div`
  margin: 50px auto;
  background-color: rgb(39, 83, 70); /* цвет фона карточки */
  background-color: #c1ba9f; /* цвет фона карточки */
  color: white; /* цвет текста */
  width: 500px;
  height: 220px;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* тень */
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%; /* чтобы сделать изображение круглым */
`;

export const PersonInfo = styled.div`
  margin-top: 20px;
`;

export const Name = styled.h2`
  margin: 0;
  font-size: 24px;
`;

export const Position = styled.p`
  margin: 15px 0;
`;

export const Company = styled.p`
  margin: 15px 0;
`;
