import React from 'react'
import styles from 'componentes/Card/PageCard.module.css'
import repositorios from '../../json/repositorios.json'
import Card from 'componentes/Card'

export default function Repositorios() {
    return (
        <div>
            <ul className={styles.itens}>
                {repositorios.map((repositorio) => (<li key={repositorio.id}>
                    <Card item={repositorio} />
                </li>))}
            </ul>
        </div>
    )
}
