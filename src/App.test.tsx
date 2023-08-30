import { screen, fireEvent } from '@testing-library/react'
import { renderWithProviders } from './test-utils'
import App from './App'

describe('App', () => {
  it('should verify products exist', async () => {
    renderWithProviders(<App />)

    const productV75 = screen.getByText('V75')
    const productV86 = screen.getByText('V86')
    const productGS75 = screen.getByText('GS75')

    expect(productV75).toBeInTheDocument()
    expect(productV86).toBeInTheDocument()
    expect(productGS75).toBeInTheDocument()
  })

  it('should fetch results when clicking on a product', async () => {
    renderWithProviders(<App />)
    const productV75 = screen.getByText('V75')

    fireEvent.click(productV75)

    screen.getByText('Loading...')

    const heading = await screen.findByText(/Charlottenlund/i)
    expect(heading).toBeInTheDocument()
  })

  it('should fetch races when clicking on a result', async () => {
    renderWithProviders(<App />)
    const productV75 = screen.getByText('V75')

    fireEvent.click(productV75)

    screen.getByText('Loading...')

    const heading = await screen.findByText(/Charlottenlund/i)
    expect(heading).toBeInTheDocument()

    fireEvent.click(heading)

    screen.getByText('Loading...')

    const raceTitle = await screen.findByText(/Testlopp/i)
    expect(raceTitle).toBeInTheDocument()
  })

  it('should show trainer info when clicking on a start', async () => {
    renderWithProviders(<App />)
    const productV75 = screen.getByText('V75')

    fireEvent.click(productV75)

    screen.getByText('Loading...')

    const heading = await screen.findByText(/Charlottenlund/i)

    fireEvent.click(heading)

    const raceTitle = await screen.findByText(/Testlopp/i)

    fireEvent.click(raceTitle)
    const startName = await screen.findByText(/Chili/i)
    expect(startName).toBeInTheDocument()

    fireEvent.click(startName)

    const trainerLabel = await screen.findByText(/Tränare/i)
    expect(trainerLabel).toBeInTheDocument()
  })
})
