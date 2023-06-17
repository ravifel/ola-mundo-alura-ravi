import React from 'react'
import styles from "componentes/Card/PageCard.module.css"
import contatos from '../../json/contatos.json'
import Card from 'componentes/Card'

export default function Contato() {
    return (
        <div>
            <ul className={styles.itens}>
                {contatos.map((contato) => (
                    <li key={contato.id}>
                        <Card item={contato} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
