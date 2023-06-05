import React from 'react'
import styles from './NotFoundPage.module.css'
import imagemErro404 from 'assets/imagens/erro_404.png'
import BotaoPrincipal from 'componentes/BotaoPrincipal'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
    const navegar = useNavigate();
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1>Ops! Página não encontrada.</h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde alguns instantes e recarregue a página, ou volte para a página inicial.
                </p>
                <div
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}>
                    <BotaoPrincipal tamanhoBotao="lg">
                        Voltar
                    </BotaoPrincipal>
                </div>
                <img
                    className={styles.imagemCachorro}
                    src={imagemErro404}
                    alt='Cachorro de Óculos'
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}



//onClick={() => navegar("/")}> volta para a página de rota "/"
//onClick={() => navegar(-1)}> volta para a página anterior