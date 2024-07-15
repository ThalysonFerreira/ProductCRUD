import styled from "styled-components";

export const Background = styled.div`
  background-color: white;
  border-radius: 6px;
  overflow-y: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Table = styled.table`
  border-collapse: collapse;
  font-family: "Montserrat", sans-serif;
  margin: 1rem;
  
`;
export const TableRow = styled.tr`

`;
export const TableData = styled.td`
  padding: 1rem;
  border-left: 1px solid #363a47;
`;

export const TableDataCentralized = styled.td`
  text-align: center;
`;
export const TableHead = styled.th`
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid #363a47;
  padding-bottom: 1rem;
`;
export const TableBody = styled.tbody`
:hover{
  background-color: #dfdfdf;
  
}`;
export const TableFoot = styled.tfoot``;

export const ActionSection = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  gap: 1.4rem;
`;
export const ButtonEdit = styled.button`
  background-color: #95ce97;
  border: none;
  border-radius: 50%;
  width: 42px;
  color: white;
  height: 42px;
  cursor: pointer;
  &:hover {
    background-color: #b5e4b7;
  }
`;

export const ButtonDelete = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background-color: #fd7c7c;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #fc9393;
  }
`;