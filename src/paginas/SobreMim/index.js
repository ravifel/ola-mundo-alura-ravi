import PostModelo from 'componentes/PostModelo'
import React from 'react'
import fotoCapa from 'assets/imagens/sobre_mim_capa.png'
import imagemRavi from 'assets/imagens/foto-ravi.png'
import styles from './SobreMim.module.css'

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"

        >
            <h3 className={styles.subtitulo}>
                Olá, sou o Ravi.
            </h3>

            <img
                className={styles.fotoSobreMim}
                src={imagemRavi}
                alt="Foto Perfil Ravi"
            />

            <p className={styles.paragrafo}>Tenho 21 anos e estou aprendendo sobre este mundo incrível da tecnologia. Acho impressionante como podemos transformar as vidas das pessoas solucionando os problemas reais do dia a dia. Isso realmente me deixa cada vez mais apaixonado por todas essas possibilidades.</p>

            <p className={styles.paragrafo}>Estou cursando o 5º semestre de Análise e desenvolvimento de sistemas na Universidade de Fortaleza (UNIFOR), no curso estamos aprendendo sobre como implementar as tecnologias da atualidade buscando ajudar em alguma forma.</p>

        </PostModelo>
    )
}
