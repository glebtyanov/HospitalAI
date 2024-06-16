import styled from "styled-components";

export const SearchWrapper = styled.div`
  background-color: rgb(193, 186, 159);
  color: rgb(47, 161, 127);
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
`;

export const SearchInput = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  color: rgb(39, 83, 70);
`;

export const SearchButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(47, 161, 127);
  color: rgb(255, 255, 255);
  cursor: pointer;
`;
