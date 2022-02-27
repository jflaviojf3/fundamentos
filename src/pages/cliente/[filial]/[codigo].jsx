import Layout from "../../../components/Layout"
import { useRouter } from "next/router"

export default function ClientePorCodigo () {
const router = useRouter()

    console.log (router.query.codigo)
    return (
        <Layout titulo="Navegação Dinamica">
            <div> Código = {router.query.codigo} </div>
            <div> Filial = {router.query.filial} </div>
        </Layout>
    )
}