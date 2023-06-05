import React from 'react'
import styles from './BotaoPrincipal.module.css'

export default function BotaoPrincipal({ children, tamanhoBotao }) {
    return (
        <button className={`
            ${styles.botaoPrincipal}
            ${styles[tamanhoBotao]}
        `}>
            {children}
        </button>
    )
}
