import React from 'react'
import Banner from 'componentes/Banner'
import styles from './Inicio.module.css'
import posts from '../../json/posts.json'
import Post from 'componentes/Post'

export default function Inicio() {
    return (
        <main>
            <Banner />
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>
        </main>
    )
}


//Interação feita sobre os posts no arquivo JSON
//Uso do 'MAP' para fazer interação sobre a lista de Posts

//É interessante que cada <li> tenha um atributo "key",
//para que o React faça a renderização sem problemas.
