import { screen, fireEvent } from '@testing-library/react'
import { renderWithProviders } from './test-utils'
import App from './App'

describe('App', () => {
  it('verify products exist', async () => {
    renderWithProviders(<App />)

    const productV75 = screen.getByText('V75')
    const productV86 = screen.getByText('V86')
    const productGS75 = screen.getByText('GS75')

    expect(productV75).toBeInTheDocument()
    expect(productV86).toBeInTheDocument()
    expect(productGS75).toBeInTheDocument()

    fireEvent.click(productV75)

    screen.getByText('Loading...')

    const heading = await screen.findByText('Charlottenlund - 15:01')
    expect(heading).toBeInTheDocument()
  })
})
