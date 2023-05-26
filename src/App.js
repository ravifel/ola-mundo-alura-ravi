console.log(window.location)
//objeto global javaScript
//fornece um objeto 'Location'

const pagina = window.location.pathname === "/" ? <div>Página Home</div> : <div>Sobre Mim</div>

function App() {
  return pagina
}

export default App;
