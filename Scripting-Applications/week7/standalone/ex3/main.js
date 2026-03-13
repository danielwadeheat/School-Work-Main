function PageTitle(text){
  const h = document.createElement('h1')
  h.className = 'page-title'
  h.textContent = text
  return h
}

function ItemRow(item, onClick){
  const div = document.createElement('div')
  div.className = 'item-row'
  div.textContent = item.name
  div.addEventListener('click', () => onClick(item))
  return div
}

function List(loader){
  const wrap = document.createElement('div')
  const inner = document.createElement('div')
  wrap.appendChild(inner)
  inner.textContent = 'Loading...'
  loader().then(items => {
    inner.innerHTML = ''
    items.forEach(i => inner.appendChild(ItemRow(i, () => alert('Clicked '+i.name))))
  })
  return wrap
}

function App(root){
  const container = document.createElement('div')
  container.appendChild(PageTitle('Exercise 3 — Tiny Tests'))
  const loader = () => new Promise(resolve => setTimeout(() => resolve([{id:1,name:'Alpha'},{id:2,name:'Beta'}]), 300))
  container.appendChild(List(loader))
  root.appendChild(container)
}

document.addEventListener('DOMContentLoaded', () => App(document.getElementById('app')))
