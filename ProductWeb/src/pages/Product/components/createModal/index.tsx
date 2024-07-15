import * as Style from "./styles";
import React from "react";

interface createModalProps {
  isOpen: boolean;
  changeModal: () => {};
}

export const CreateModal = ({ isOpen, changeModal }: createModalProps) => {
  if (isOpen)
    return (
      <Style.Background>
        <Style.Content>
          <Style.ContentBody>
            <Style.Header>
              <Style.Title> Adição de produto</Style.Title>
              <Style.ExitButton onClick={changeModal}>X</Style.ExitButton>
            </Style.Header>
          </Style.ContentBody>
          <Style.Region>
            <Style.InputRegion>
              <Style.SubTitle>Nome</Style.SubTitle>
              <Style.InputText type="text" />
              <Style.SubTitle>Quantidade</Style.SubTitle>
              <Style.InputNumber type="number" />
              <Style.SubTitle>Preço</Style.SubTitle>
              <Style.InputNumber type="number" />
            </Style.InputRegion>
            <Style.InputRegion>
              <Style.SubTitle>Tipo de grandeza</Style.SubTitle>
              <Style.InputSelect name="quantityType">
                <option value="-1" selected>Selecionar</option>
                <option value="0">Kg</option>
                <option value="1">Unidade</option>
              </Style.InputSelect>
            </Style.InputRegion>
          </Style.Region>
          <Style.ContentFooter>
            <Style.ButtonEdit onClick={()=>{
              
            }}>Salvar</Style.ButtonEdit>
          </Style.ContentFooter>
        </Style.Content>
      </Style.Background>
    );
};
