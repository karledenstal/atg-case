import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { productApi } from './api/productApi'
import { gameApi } from './api/gameApi'

const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  [gameApi.reducerPath]: gameApi.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    devTools: import.meta.env.PROD,
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware, gameApi.middleware),
  })

export const store = setupStore()

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
setupListeners(store.dispatch)
