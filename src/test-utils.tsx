import { ReactElement, ReactNode } from 'react'
import { Queries, RenderResult, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { setupStore } from './store'
import { setupListeners } from '@reduxjs/toolkit/query'

export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = {},
): RenderResult<Queries, HTMLElement> {
  setupListeners(store.dispatch)

  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}
