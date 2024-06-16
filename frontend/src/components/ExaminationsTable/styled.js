import styled from "styled-components";

export const TableContainer = styled.div`
  width: calc(100% - 220px);
  margin: 0px 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #c1ba9f;
  border-radius: 10px;
`;

export const TableHeader = styled.th`
  padding: 8px;
`;

export const TableCell = styled.td`
  border-top: 1px solid #ddd;
  padding: 8px;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  margin: 5px;
  border-radius: 20px;
  background-color: #a59a72;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  // text-transform: uppercase;
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

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin: 5px;
`;
