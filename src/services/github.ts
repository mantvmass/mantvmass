import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Github, GithubOrg } from '../types/Github'


export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/users/' }),
    endpoints: (builder) => ({
        getGithubByName: builder.query<Github, string>({
            query: (username) => username,  // user: mantvmass
        }),
    }),
})
export const { useGetGithubByNameQuery } = githubApi



export const githubOrgApi = createApi({
    reducerPath: 'githubOrgApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/users/' }),
    endpoints: (builder) => ({
        getGithubOrgByName: builder.query<GithubOrg[], string>({
            query: (username) => `${username}/orgs`,  // user: mantvmass
        }),
    }),
})
export const { useGetGithubOrgByNameQuery } = githubOrgApi