import React from 'react'
import styles from "./Contato.module.css"
import contatos from '../../json/contatos.json'
import ContatoCard from 'componentes/ContatoCard'

export default function Contato() {
    return (
        <div>
            <ul className={styles.contatos}>
                {contatos.map((contato) => (
                    <li key={contato.id}>
                        <ContatoCard contato={contato} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
