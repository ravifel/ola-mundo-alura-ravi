import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from '../../assets/imagens/imagem-fundo-banner.png'
import imagemRavi from '../../assets/imagens/foto-ravi.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, seja bem-vindo!</h1>
                <p className={styles.paragrafo}>
                    Eu sou o Ravi Silva,<br />
                    estudante de Análise e Desenvolvimento de Sistemas.
                    Aqui eu compartilho sobre os meus conhecimentos, espero que goste!
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src={imagemRavi}
                    alt="Foto Perfil Ravi"
                />
            </div>
        </div>
    )
}
