import React from 'react'
import PageTitle from './components/PageTitle'
import List from './components/List'

const loader = () => new Promise(resolve => setTimeout(() => resolve([
  { id: 1, name: 'Alpha' },
  { id: 2, name: 'Beta' }
]), 200))

export default function App() {
  return (
    <div className="container">
      <PageTitle text="Exercise 3 — Tiny Tests" />
      <List loader={loader} />
    </div>
  )
}
