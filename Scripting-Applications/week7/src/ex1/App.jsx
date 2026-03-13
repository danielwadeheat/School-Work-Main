import React, { useState, useMemo } from 'react'
import PageTitle from './components/PageTitle'
import SearchBox from './components/SearchBox'
import ItemRow from './components/ItemRow'

const sampleItems = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Carrot' }
]

export default function App() {
  const [query, setQuery] = useState('')
  const items = useMemo(() => sampleItems, [])

  const filtered = items.filter(i => i.name.toLowerCase().includes(query.toLowerCase()))

  function handleClick(item) {
    alert(`Clicked ${item.name}`)
  }

  return (
    <div className="container">
      <PageTitle text="Exercise 1 — Refactor & Reuse" />
      <SearchBox value={query} onChange={setQuery} />
      <div className="list">
        {filtered.map(it => (
          <ItemRow key={it.id} item={it} onClick={() => handleClick(it)} />
        ))}
      </div>
    </div>
  )
}
