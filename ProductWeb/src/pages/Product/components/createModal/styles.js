import styled from "styled-components";

export const Background = styled.div`
  position: fixed; // This makes it cover the entire scrollable page, not just browser height
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e8e8e8;
  height: 50vh;
  width: 80vw;

  border-radius: 8px;
  z-index: 1011;
`;

export const ContentBody = styled.div`
  display: flex;
  height: 15%;
`;

export const InputRegion = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 0 1rem;

  &select{
    height: 2rem;
  }
`;

export const InputText = styled.input`
  height: 2rem;
  border: none;
  border-radius: 8px;
`;

export const InputNumber = styled.input`
  height: 2rem;
  border: none;
  border-radius: 8px;
`;
export const InputSelect = styled.select`
  height: 2rem;
  border: none;
  border-radius: 8px;
`;

export const Region = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70%;
`;

export const Header = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  margin: 0 1rem;
`;
export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 250;
`;

export const SubTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
`;

export const ContentFooter = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: right;
`;
export const ButtonEdit = styled.button`
  background-color: #95ce97;
  border: none;
  width: 8rem;
  border-radius: 8px;
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

export const ExitButton = styled.button`
  border: none;
  color: black;
  height: 1rem;
  background-color: #e8e8e8;
  font-size: 30px;
  cursor: pointer;
`;
