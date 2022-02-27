import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao(){

    const [codigo, setCodigo] = useState({})
    const [cliente, setCliente] = useState({})
    
    async function obterCliente(){
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await resp.json()
        setCliente(dados)
<<<<<<< HEAD
=======

        // fetch(`http://localhost:3000/api/clientes/${codigo}`)
        // .then(resp => resp.json())
        // .then(dados => setCliente(dados))
>>>>>>> b056d244bee8b39aaa5ce3f72fdf16336b3834fd
    }

    return (
        <Layout >
            <div>
                <input type="number" value={codigo}
                    onChange={e => setCodigo(e.target.value)}/>
                <button onClick={obterCliente}>Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}