import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class AxiosClient {
  static baseUrl: string = "http://localhost:5110/";

  static async get<TResponse>(
    uri: string,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<TResponse>> {
    try {
      return await axios.get<TResponse>(this.baseUrl + uri, config);
    } catch (error: any) {
        throw new Error(error.message);
    }
  }

  static async post<TResponse>(
    uri: string,
    data: any,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<TResponse>> {
    try {
      return await axios.post<TResponse>(this.baseUrl + uri, data, config);
    } catch (error: any) {
        throw new Error(error.message);
    }
  }

  static async put<TResponse>(
    uri: string,
    data: any,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<TResponse>> {
    try {
      return await axios.put<TResponse>(this.baseUrl + uri, data, config);
    } catch (error: any) {
        throw new Error(error.message);
    }
  }

  static async delete<TResponse>(
    uri: string,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<TResponse>> {
    try {
      return await axios.delete<TResponse>(this.baseUrl + uri, config);
    } catch (error: any) {
        throw new Error(error.message);
    }
  }
}
