import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductResponse } from "../types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://products-api-9kbo.onrender.com/api",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, number>({
      query: (page = 1) => `products?page=${page}`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
