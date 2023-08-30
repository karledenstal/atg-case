import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { racingInfoApi } from './api/racingInfoApi'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const rootReducer = combineReducers({
  [racingInfoApi.reducerPath]: racingInfoApi.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    devTools: import.meta.env.PROD,
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(racingInfoApi.middleware),
  })

export const store = setupStore()

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
setupListeners(store.dispatch)
