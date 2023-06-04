import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import imagemRavi from '../../assets/foto-ravi.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Ravi</h1>
                <p className={styles.paragrafo}>
                    Olá, seja bem-vindo ao meu espaço!<br />
                    Eu sou o Ravi Silva,
                    estudante de Análise e Desenvolvimento de Sistemas. <br />
                    Aqui compartilho sobre os meus conhecimentos, espero que goste!
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
