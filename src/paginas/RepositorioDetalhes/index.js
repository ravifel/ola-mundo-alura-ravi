import React from 'react'
import { useParams } from 'react-router-dom'
import styles from "./RepositorioDetalhes.module.css"
import repositorios from 'json/repositorios.json'
import BotaoPrincipal from 'componentes/BotaoPrincipal'
import { Link } from 'react-router-dom'

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

        <div className={styles.card}>

            <div>
                <h2 className={styles.titulo}>{repositorio.titulo}</h2>
            </div>

            <img
                className={styles.capa}
                src={`/assets/${repositorio.pathAssetsImage}/${repositorio.id}/capa.png`}
                alt='Imagem de Capa do Card'
            />

            <p className={styles.descricao} >{repositorio.descricao}</p>

            <Link to={repositorio.linkRepositorio} target='_blank'>
                <BotaoPrincipal link={repositorio.linkRepositorio}>
                    Acessar Repositório GitHub
                </BotaoPrincipal>
            </Link>
        </div>
    )
}



//METODO -> 'find()'
// funçao executada para cada um dos elementos.
// é necessário que seja passado um valor de retorno 'true' ou 'false'
// quando ele encontrar o primeiro valor de retorno 'true',
// ele vai selecionar o item correspondente.