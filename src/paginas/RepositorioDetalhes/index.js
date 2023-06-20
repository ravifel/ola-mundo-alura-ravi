import React from 'react'
import { useParams } from 'react-router-dom'
import PostModelo from 'componentes/PostModelo'
import styles from "./RepositorioDetalhes.module.css"
import fotoCapa from 'assets/imagens/sobre_mim_capa.png'
import repositorios from 'json/repositorios.json'

export default function RepositorioDetalhes() {
    const parametros = useParams()

    const repositorio = repositorios.find(
        (repositorio) => {
            return repositorio.id === Number(parametros.id)
            //caso o 'ID' do repositorio seja igual ao do parametro passado
            //o metodo 'find()' vai retornar esse repositorio
            //Foi passado o 'Number()', pq o parametro é passado como STRING
            //E no arquivo JSON o 'ID' é passado como NUMBER
        }
    )

    return (
        <div>
            <PostModelo
                fotoCapa={fotoCapa}
                titulo={repositorio.titulo}


            >
                <h3 className={styles.subtitulo}>
                    Olá, Seja bem vindo ao <strong>{repositorio.titulo}</strong>
                </h3>

                <img
                    className={styles.fotoSobreMim}
                    src={`/assets/${repositorio.pathAssetsImage}/${repositorio.id}/capa.png`}
                    alt="Foto Perfil Ravi"
                />

                <p>
                    {repositorio.descricao}
                </p>

            </PostModelo>
        </div>
    )
}



//METODO -> 'find()'
// funçao executada para cada um dos elementos.
// é necessário que seja passado um valor de retorno 'true' ou 'false'
// quando ele encontrar o primeiro valor de retorno 'true',
// ele vai selecionar o item correspondente.