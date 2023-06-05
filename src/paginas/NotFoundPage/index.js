import React from 'react'
import styles from './NotFoundPage.module.css'
import imagemErro404 from 'assets/imagens/erro_404.png'

export default function NotFoundPage() {
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
                <div className={styles.botaoContainer}>
                    <button>Voltar</button>
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
