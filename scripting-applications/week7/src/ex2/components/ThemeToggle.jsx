import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div style={{ marginBottom: 12 }}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  )
}
