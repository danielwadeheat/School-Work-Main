function ThemeProvider(root){
  let theme = 'light'
  const state = { get theme(){ return theme }, setTheme(t){ theme=t; render() } }
  function PageTitle(text){
    const h = document.createElement('h1')
    h.className = 'page-title ' + state.theme
    h.textContent = text + ' ('+state.theme+')'
    return h
  }
  function ThemeToggle(){
    const btn = document.createElement('button')
    btn.className = 'theme-toggle'
    btn.textContent = 'Toggle Theme'
    btn.addEventListener('click', () => state.setTheme(state.theme==='light'?'dark':'light'))
    return btn
  }
  function Paragraph(){
    const p = document.createElement('p')
    p.textContent = 'This paragraph also reads the theme value.'
    p.className = state.theme
    return p
  }

  const wrap = document.createElement('div')
  function render(){
    wrap.innerHTML = ''
    wrap.appendChild(PageTitle('Exercise 2 — Theme Context'))
    wrap.appendChild(ThemeToggle())
    wrap.appendChild(Paragraph())
  }
  render()
  root.appendChild(wrap)
}

document.addEventListener('DOMContentLoaded', () => {
  ThemeProvider(document.getElementById('app'))
})
