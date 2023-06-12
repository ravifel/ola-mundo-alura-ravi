import React from 'react'
import styles from './ContatoCard.module.css'
import BotaoPrincipal from 'componentes/BotaoPrincipal'
import { Link } from 'react-router-dom'

export default function ContatoCard({ contato }) {
    return (
        <Link to={contato.link} target='blank'>
            <div className={styles.contatoCard}>
                <img
                    className={styles.capa}
                    src={`/assets/contatos/${contato.id}/capa.png`}
                    alt='Imagem de Contato'
                />
                <h2 className={styles.titulo}>{contato.titulo}</h2>
                <BotaoPrincipal>Acessar</BotaoPrincipal>
            </div>
        </Link>
    )
}
