import React from 'react'
import styles from './Menu.module.css'

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <a className={styles.link} href='/'>Início</a>
                <a className={styles.link} href='/sobre-mim'>Sobre Mim</a>
            </nav>
        </header>
    )
}
