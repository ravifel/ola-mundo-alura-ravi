import React from 'react'
import styles from './Menu.module.css'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.link} to='/'>Início</Link>
                <Link className={styles.link} to='/sobre-mim'>Sobre Mim</Link>
            </nav>
        </header>
    )
}


//Implementação do "LINK" para que não seja feito o "RELOAD" da página e consequentemente seguindo um padrão de Single Page Aplication (SPA).

//ao invês de usar <a href="">
//usar o <Link to="">

//isso evita o "RELOAD" da página sempre que for selecionando alguma opção do 'Menu'.
//OBS: O react-router-dom facilita a criação de SPA's