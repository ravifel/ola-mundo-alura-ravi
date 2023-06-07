import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModelo from 'componentes/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './Post.css'
import NotFoundPage from 'paginas/NotFoundPage';
import PaginaPadrao from 'componentes/PaginaPadrao';


export default function Post() {
    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    //Quando o Post não existir (Vai ser possivel ver isso atravês do ID).
    if (!post) {
        return <NotFoundPage />
    }


    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}>
                        <div className='post-markdown-container'>
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                    </PostModelo>
                } />
            </Route>

        </Routes>
    )
}


// foi usado o metodo 'find()' para encontrar o post que está relacionado com o parametro da URL
//na implementação do metodo, é comparado o parametro com o id que está no arquivo json importado
//depois disso é retornado o POST correspondente