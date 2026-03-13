import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function PageTitle({ text }) {
  const { theme } = useContext(ThemeContext)
  return <h1 className={`page-title ${theme}`}>{text} ({theme})</h1>
}
