import { CreateProductsModel } from "../models/createProductModel";
import { GetProductsModel } from "../models/getProductModel";
import { UpdateProductsModel } from "../models/updateProductModel";
import { AxiosClient } from "../util/axiosClient";

export class ProductService{
    async GetProducts():Promise<GetProductsModel>{
        const response = await AxiosClient.get<GetProductsModel>("Product")

        if (response.status !== 200) throw new Error(response.data.message);
        return response.data;
    } 

    async CreateProduct(request: CreateProductsModel):Promise<void>{
        const response = await AxiosClient.post<{message:string}>("Product",request);
        if (response.status !== 201) throw new Error(response.data.message);
    }

    async DeleteProduct(request:number):Promise<void>{
        const response = await AxiosClient.delete<{message:string}>("/Product/"+request);
        if (response.status !== 200) throw new Error(response.data.message);
    }

    async UpdateProduct(request:UpdateProductsModel):Promise<void>{
        const response = await AxiosClient.put<{message:string}>("/Product/"+request.id,request);
        if (response.status !== 200) throw new Error(response.data.message);
    }




}