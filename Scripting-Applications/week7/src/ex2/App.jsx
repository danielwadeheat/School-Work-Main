import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import PageTitle from './components/PageTitle'
import ThemeToggle from './components/ThemeToggle'
import './styles.css'

function Inner() {
  return (
    <div className="container">
      <PageTitle text="Exercise 2 — Theme Context" />
      <ThemeToggle />
      <p>Two components read the context: the title and this paragraph.</p>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Inner />
    </ThemeProvider>
  )
}
