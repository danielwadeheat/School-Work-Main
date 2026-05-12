import React from 'react'

export default function SearchBox({ value, onChange }) {
  return (
    <input
      className="search"
      placeholder="Search..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}
