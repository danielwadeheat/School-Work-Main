import { render, screen, waitFor } from '@testing-library/react'
import List from '../components/List'

test('List shows Loading then items', async () => {
  const loader = () => Promise.resolve([{ id: 1, name: 'A' }])
  render(<List loader={loader} />)
  expect(screen.getByText('Loading...')).toBeInTheDocument()
  await waitFor(() => expect(screen.getByText('A')).toBeInTheDocument())
})
