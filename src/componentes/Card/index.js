import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import BotaoPrincipal from 'componentes/BotaoPrincipal'

export default function Card({ item }) {
    return (
        <Link to={item.link} target={item.target}>
            <div className={styles.card}>
                <img
                    className={styles.capa}
                    src={`/assets/${item.pathAssetsImage}/${item.id}/capa.png`}
                    alt='Imagem de Capa do Card'
                />
                <h2 className={styles.titulo}>{item.titulo}</h2>
                <p>{item.descricao}</p>
                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}
