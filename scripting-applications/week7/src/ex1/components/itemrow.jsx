import React from 'react'

export default function ItemRow({ item, onClick }) {
  return (
    <div className="item-row" onClick={onClick} role="button">
      <span className="item-name">{item.name}</span>
      <button className="item-btn" onClick={(e) => { e.stopPropagation(); onClick(); }}>
        Select
      </button>
    </div>
  )
}
