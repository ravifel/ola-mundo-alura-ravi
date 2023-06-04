import React from 'react'
import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink titulo="Inicio" pathName="/" />
                <MenuLink titulo="Sobre Mim" pathName="/sobre-mim" />
            </nav>
        </header>
    )
}