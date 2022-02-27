import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao(){

    const [cliente, setCliente] = useState({})
    
    function obterCliente(){
        fetch('http://localhost:3000/api/clientes/66912')
        .then(resp => resp.json())
        .then(dados => setCliente(dados))
    }

    return (
        <Layout >
            <div>
                <input type="number" />
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