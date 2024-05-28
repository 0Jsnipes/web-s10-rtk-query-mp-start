import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import Quotes from "../components/Quotes";
import { ids } from "webpack";
// create your RTK Query endpoints here
export const quotesApi = createApi({
    reducerPath:'quotesAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9009/api/'}),
    tagTypes: ['Quotes'],
    endpoints: builder => ({
       getQuotes: builder.query({
        query: ()=> 'quotes',
        providedTags: ['Quotes'],
       }),
        createQuote: builder.mutation({
            query: quote=> ({
                url: 'quotes',
                method: 'POST',
                body: quote,
            }),
            invalidatesTags: ['Quotes']
        }),
        toggleQuote: builder.mutation ({
            query: ({id,quote}) => ({
            url: `quotes/${id}`,
            method: 'PUT',
            body: quote,
        }),
        invalidatesTags: ['Quotes']
    }),
        deleteQuote: builder.mutation ({
            query:id => ({
             url: `quotes/${id}`,
            method: 'DELETE'
        }),
    invalidatesTags: ['Quotes']
    })
})
})
export const {
    useGetQuotesQuery, useCreateQuoteMutation, useToggleQuoteMutation, useDeleteQuoteMutation,
} = quotesApi