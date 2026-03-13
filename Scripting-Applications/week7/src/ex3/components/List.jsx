import React, { useEffect, useState } from 'react'
import ItemRow from './ItemRow'

export default function List({ loader }) {
  const [items, setItems] = useState(null)

  useEffect(() => {
    let mounted = true
    loader().then(data => { if (mounted) setItems(data) })
    return () => { mounted = false }
  }, [loader])

  if (items === null) return <div>Loading...</div>

  return (
    <div>
      {items.map(i => (
        <ItemRow key={i.id} item={i} onClick={() => {}} />
      ))}
    </div>
  )
}
