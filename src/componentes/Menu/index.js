import React from 'react'
import styles from './Menu.module.css'
import { Link, useLocation } from 'react-router-dom'

export default function Menu() {
    const localizacao = useLocation();

    console.log(localizacao);

    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={`
                        ${styles.link} 
                        ${localizacao.pathname === '/' ? styles.linkDestacado : ""}
                    `} to='/'>
                    Início
                </Link>
                <Link className={`
                        ${styles.link}
                        ${localizacao.pathname === '/sobre-mim' ? styles.linkDestacado : ""}
                    `} to='/sobre-mim'>
                    Sobre Mim
                </Link>
            </nav>
        </header>
    )
}


//Implementação do "LINK" para que não seja feito o "RELOAD" da página e consequentemente seguindo um padrão de Single Page Aplication (SPA).

//ao invês de usar <a href="">
//usar o <Link to="">

//isso evita o "RELOAD" da página sempre que for selecionando alguma opção do 'Menu'.
//OBS: O react-router-dom facilita a criação de SPA's

//---

//O useLocation() é um HOOK do react-router-dom que vai retornar alguma informação