const sampleItems = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Carrot' }
]

function PageTitle(text){
  const h = document.createElement('h1')
  h.className = 'page-title'
  h.textContent = text
  return h
}

function SearchBox(value, onChange){
  const input = document.createElement('input')
  input.className = 'search'
  input.placeholder = 'Search...'
  input.value = value
  input.addEventListener('input', e => onChange(e.target.value))
  return input
}

function ItemRow(item, onClick){
  const div = document.createElement('div')
  div.className = 'item-row'
  div.addEventListener('click', () => onClick(item))
  const span = document.createElement('span')
  span.textContent = item.name
  const btn = document.createElement('button')
  btn.className = 'item-btn'
  btn.textContent = 'Select'
  btn.addEventListener('click', e => { e.stopPropagation(); onClick(item) })
  div.appendChild(span)
  div.appendChild(btn)
  return div
}

function App(root){
  let query = ''
  const container = document.createElement('div')

  container.appendChild(PageTitle('Exercise 1 — Refactor & Reuse'))

  const search = SearchBox(query, v => { query = v; renderList() })
  container.appendChild(search)

  const listWrap = document.createElement('div')
  listWrap.className = 'list'
  container.appendChild(listWrap)

  function handleClick(item){
    alert('Clicked ' + item.name)
  }

  function renderList(){
    listWrap.innerHTML = ''
    const filtered = sampleItems.filter(i => i.name.toLowerCase().includes(query.toLowerCase()))
    filtered.forEach(it => listWrap.appendChild(ItemRow(it, handleClick)))
  }

  renderList()
  root.appendChild(container)
}

document.addEventListener('DOMContentLoaded', () => {
  App(document.getElementById('app'))
})
