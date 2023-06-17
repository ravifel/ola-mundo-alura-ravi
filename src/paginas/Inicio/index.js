import React from 'react'
import styles from 'componentes/Card/PageCard.module.css'
import posts from '../../json/posts.json'
import Card from 'componentes/Card'

export default function Inicio() {
    return (
        <ul className={styles.itens}>
            {posts.map((post) => (
                <li key={post.id}>
                    <Card item={post} />
                </li>
            ))}
        </ul>
    )
}


//Interação feita sobre os posts no arquivo JSON
//Uso do 'MAP' para fazer interação sobre a lista de Posts

//É interessante que cada <li> tenha um atributo "key",
//para que o React faça a renderização sem problemas.
