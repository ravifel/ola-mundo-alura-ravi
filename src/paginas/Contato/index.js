import React from 'react'
import styles from "./Contato.module.css"
import contatos from '../../json/contatos.json'
import Card from 'componentes/Card'

export default function Contato() {
    return (
        <div>
            <ul className={styles.contatos}>
                {contatos.map((contato) => (
                    <li key={contato.id}>
                        <Card item={contato} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
