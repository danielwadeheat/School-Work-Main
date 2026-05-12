import React from 'react'

export default function ItemRow({ item, onClick }) {
  return (
    <div className="item-row" onClick={() => onClick(item)}>
      <span>{item.name}</span>
    </div>
  )
}
