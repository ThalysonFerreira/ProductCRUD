import * as Style from "./styles";
import ProductTable from "./components/productTable/index";
import { Provider } from "react-redux";
import { storeState } from "../../features";
import { useState } from "react";
import { CreateModal } from "../Product/components/createModal";
function ProductPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Provider store={storeState}>
      <Style.Container>
        <CreateModal
          isOpen={openModal}
          changeModal={() => {
            setOpenModal(!openModal);
          }}
        />
        <Style.Box>
          <Style.BoxTitle>
            <Style.Title>CRUD</Style.Title>
            <Style.Title>Produtos</Style.Title>
          </Style.BoxTitle>
          <Style.BoxBody>
            <ProductTable />
          </Style.BoxBody>
          <Style.BoxFooter>
            <Style.AddButton
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Adicionar Produto
            </Style.AddButton>
          </Style.BoxFooter>
        </Style.Box>
      </Style.Container>
    </Provider>
  );
}
export default ProductPage;
