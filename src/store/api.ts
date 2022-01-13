import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initiate empty api service that will inject endpoints later
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: () => ({}),
});
