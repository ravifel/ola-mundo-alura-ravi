import React from 'react'
import conhecimentos from '../../json/conhecimentos.json'
import Card from 'componentes/Card'
import styles from 'componentes/Card/PageCard.module.css'

export default function Conhecimentos() {
    return (
        <div>
            <ul className={styles.itens}>
                {conhecimentos.map((conhecimento) => (
                    <li>
                        <Card item={conhecimento} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
