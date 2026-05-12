import { render, screen, fireEvent } from '@testing-library/react'
import ItemRow from '../components/ItemRow'

test('clicking ItemRow calls handler', () => {
  const item = { id: 1, name: 'X' }
  const handle = vi.fn()
  render(<ItemRow item={item} onClick={handle} />)
  fireEvent.click(screen.getByText('X'))
  expect(handle).toHaveBeenCalledWith(item)
})
