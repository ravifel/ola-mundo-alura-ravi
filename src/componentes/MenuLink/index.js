import React from 'react'
import styles from './MenuLink.module.css'
import { Link, useLocation } from 'react-router-dom'

export default function MenuLink({ titulo, pathName }) {
    const localizacao = useLocation();
    console.log(localizacao);

    return (
        <div>
            <Link className={`
                        ${styles.link} 
                        ${localizacao.pathname === pathName ? styles.linkDestacado : ""}
                    `} to={pathName}>
                {titulo}
            </Link>
        </div>
    )
}


//Implementação do "LINK" para que não seja feito o "RELOAD" da página e consequentemente seguindo um padrão de Single Page Aplication (SPA).

//ao invês de usar <a href="">
//usar o <Link to="">

//isso evita o "RELOAD" da página sempre que for selecionando alguma opção do 'Menu'.
//OBS: O react-router-dom facilita a criação de SPA's

//---

//O useLocation() é um HOOK do react-router-dom que vai retornar alguma informação