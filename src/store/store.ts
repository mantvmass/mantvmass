import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { githubApi, githubOrgApi } from '../services/github'

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        [githubOrgApi.reducerPath]: githubOrgApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware, githubOrgApi.middleware)
})
setupListeners(store.dispatch)