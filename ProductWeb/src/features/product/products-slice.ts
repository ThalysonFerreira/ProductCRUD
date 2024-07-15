import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Product } from "../../models/product";
import { GetProductsModel } from "../../models/getProductModel";
import { ProductService } from "../../services/productService";
import { CreateProductsModel } from "../../models/createProductModel";
import { UpdateProductsModel } from "../../models/updateProductModel";

interface GetProductsState {
    loading: boolean,
    error?: string,
    products: Product[],
}
const initialState: GetProductsState = {
    loading: false,
    products: []
}

export const getProductsAction = createAsyncThunk("getProducts", async (): Promise<GetProductsModel | undefined> => {
    try {
        let products = await new ProductService().GetProducts();
        return products;
    } catch (error: any) {
        throw error.message;
    }
});

export const createProductAction = createAsyncThunk("createProduct", async (createProductModel: CreateProductsModel) => {
    try {
        let response = await new ProductService().CreateProduct(createProductModel)

    } catch (error: any) {
        throw error.message;
    }
})

export const updateProductAction = createAsyncThunk("updateProduct", async (updateProductModel: UpdateProductsModel) => {
    try {
        let response = await new ProductService().UpdateProduct(updateProductModel)

    } catch (error: any) {
        throw error.message;
    }
})

export const deleteProductAction = createAsyncThunk("deleteProduct", async (id: number) => {
    try {
        let response = await new ProductService().DeleteProduct(id);

    } catch (error: any) {
        throw error.message;
    }
})

export const ProductsSlice = createSlice({
    name: "product",
    reducers: {},
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getProductsAction.pending, (state) => {
            state.loading = true;
            state.products = [];
        })
            .addCase(getProductsAction.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload?.products || []
            })
            .addCase(getProductsAction.rejected, (state) => {
                state.loading = false;
                state.error = "Houve um erro ao carregar a lista de produtos."
            });

        builder.addCase(createProductAction.pending,(state)=>{
            state.loading = true;
        })
        .addCase(createProductAction.fulfilled,(state, action)=>{
            state.loading = false;
        })
        .addCase(createProductAction.rejected,(state, action)=>{
            state.loading = false;
            state.error = "Ouve um erro ao salvar."
        })

        builder.addCase(updateProductAction.pending,(state)=>{
            state.loading = true;
        })
        .addCase(updateProductAction.fulfilled,(state, action)=>{
            state.loading = false;
        })
        .addCase(updateProductAction.rejected,(state, action)=>{
            state.loading = false;
            state.error = "Ouve um erro ao atualizar."
        })

        builder.addCase(deleteProductAction.pending,(state)=>{
            state.loading = true;
        })
        .addCase(deleteProductAction.fulfilled,(state, action)=>{
            state.loading = false;
        })
        .addCase(deleteProductAction.rejected,(state, action)=>{
            state.loading = false;
            state.error = "Ouve um erro ao atualizar."
        })

        builder.addDefaultCase((state, action) => {});
    }
});

