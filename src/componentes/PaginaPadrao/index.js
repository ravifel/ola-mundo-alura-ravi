import React from 'react'
import Banner from 'componentes/Banner'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao() {
    return (
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}

// OUTLET
// é onde é renderizado o conteúdo da rota que foi aninhada.