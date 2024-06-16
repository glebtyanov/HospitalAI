import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 200px;
  background-color: #c1ba9f;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  margin-left: 20px;
`;

export const SidebarItem = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 20px;
  background-color: #a59a72;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  margin-bottom: 10px;

  cursor: pointer;
  border: none; 
    &:hover {
      background-color: #6a6243;
    }

    &:focus {
      outline: none;
    }

  }
`;
