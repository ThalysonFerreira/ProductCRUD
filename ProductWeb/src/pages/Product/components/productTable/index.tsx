import * as Style from "./styles";
import { ReactElement, useEffect } from "react";
import { RootState, useAppDispatch } from "../../../../features";
import { useSelector } from "react-redux";
import React from "react";
import { Product } from "../../../../models/product";
import { getProductsAction } from "../../../../features/product/products-slice";


export function ProductTable(): ReactElement {
  const dispatch = useAppDispatch();
  const productState = useSelector((state: RootState) => state.product);


  const getQuantityType = (quantityType:number):string =>{
      switch(quantityType){
        case 0:
          return "/Kg"
        case 1: 
        return ""
        default: return ""
      }
  }
  const getQuantityFormat = (quantityType:number):string =>{
    switch(quantityType){
      case 0:
        return "Kg"
      case 1: 
      return ""
      default: return ""
    }
}
  const getProducts = async () => {
    if (!productState.loading) await dispatch(getProductsAction());
  };

  useEffect(() => {
    getProducts();
  }, []);

  let list: Product[] = productState.products;

  return (
    
    <Style.Background>
      <Style.Content>
        <Style.Table>
          <Style.TableRow>
            <Style.TableHead>Produto</Style.TableHead>
            <Style.TableHead>Preço</Style.TableHead>
            <Style.TableHead>Quantidade</Style.TableHead>
            <Style.TableHead>Ações</Style.TableHead>
          </Style.TableRow>
          <Style.TableBody>
            {list.length > 0 ? (
              list.map((item, index) => {
                return (
                  <Style.TableRow key={item.id}>
                    <Style.TableData>{item.name}</Style.TableData>
                    <Style.TableData>R$ {item.price}{getQuantityType(item.quantityType) } </Style.TableData>
                    <Style.TableData>{item.quantity}{getQuantityFormat(item.quantityType) }</Style.TableData>
                    <Style.TableData>
                      <Style.ActionSection>
                        <Style.ButtonEdit title="Edição de produto">
                          <i className="fa fa-pencil"></i>
                        </Style.ButtonEdit>
                        <Style.ButtonDelete
                          value={index}
                          title="Remover produto"
                        >
                          <i className="fa fa-trash"></i>
                        </Style.ButtonDelete>
                      </Style.ActionSection>
                    </Style.TableData>
                  </Style.TableRow>
                );
              })
            ) : (
              <Style.TableRow>
                <Style.TableData>
                  Nenhum produto foi encontrado.
                </Style.TableData>
                <Style.TableData></Style.TableData>
                <Style.TableData></Style.TableData>
                <Style.TableData></Style.TableData>
              </Style.TableRow>
            )}
          </Style.TableBody>
          <Style.TableFoot>
            <Style.TableRow>
              <Style.TableData></Style.TableData>
            </Style.TableRow>
          </Style.TableFoot>
        </Style.Table>
      </Style.Content>
    </Style.Background>
  );
}
export default ProductTable;
