import { render, screen } from '@testing-library/react'
import PageTitle from '../components/PageTitle'

test('PageTitle renders heading text', () => {
  render(<PageTitle text="Hello" />)
  expect(screen.getByText('Hello')).toBeInTheDocument()
})
