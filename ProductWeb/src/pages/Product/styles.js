import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 250;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e8e8e8;
  height: 90vh;
  width: 85vw;
  margin: 2rem;
  border-radius: 8px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
`;

export const BoxTitle = styled.div`
  height: 20%;
  margin: 1rem;
`;
export const BoxBody = styled.div`
  height: 70%;
  overflow-y: auto;
  margin: 0 1rem;
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #363a47;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #e8e8e8;
  }
`;
export const BoxFooter = styled.div`
  height: 10%;
  margin: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding: 1rem;
`;
export const AddButton = styled.button`
  font-family: "Montserrat", sans-serif;
  background-color: #95ce97;
  border: none;
  border-radius: 8px;
  width: 6rem;
  color: white;
  height: 2.6rem;
  cursor: pointer;
  &:hover {
    background-color: #b5e4b7;
  }
`;
