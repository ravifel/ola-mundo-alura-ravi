import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobre-mim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>} />

      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;


//BrowserRouter
//É o componente que vai permitir que possam ser usados outros componentes do 'React-Router-Dom' para ter um sistema de rotas mais legível e de mais fácil manutenção

//Routes
//É o componente que vai funcionar como o roteador da aplicação. Vai decidir qual o componente que vai ser exibido na tela.
//Dentro do componente "BrowserRoutes" deve-se colocar o componente de "Routes"

//Route
//É um componente de autofechamento.
//É onde vão ser colocadas as informações das rotas.
//Informações:
// -> path="/" --> Caminho da rota
// -> element={<Inicio/>}  --> Componente mostrado na rota

//Página NOT FOUND --> path="*"
//A rora que tem o "*", é selecionada quando nenhuma das outras rotas deu certo na url

//Inserção do componente de 'Menu' fora das rotas, pois ele sempre deverá aparecer independente das rotas.

//--------------------

//Recurso de ROTAS ANINHADAS do 'react-router-dom'.
// é quando uma rota passa a possuir rotas filhas.
// as rotas "Inicio" e "SobreMim", passaram a se tornar filhas da rota "PaginaPadrão"
// é indicada na rota "pai", onde serão colocadas as rotas que forem renderizadas.

//Na rota "/", a estrutura a ser renderizada é:
//<PaginaPadrao>
// <Inicio/>
//</PaginaPadrao>

//Na rota "/sobre-mim", a estrutura a ser renderizada é:
//<PaginaPadrao>
// <SobreMim/>
//</PaginaPadrao>