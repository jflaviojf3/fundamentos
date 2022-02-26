import Layout from '../components/Layout'
export default function JSX() {

    const titulo = <h1>Fundamentos de Next.js & React</h1>

    function subtitulo() {
        return <h2>Vamos estudar esse {"framework".toUpperCase()}</h2>
    }
    return (
        <>
            <Layout titulo="Entendendo JSX">
                {titulo}
                {subtitulo()}
                <p>
                    {JSON.stringify([{ nome: 'JLima', idade: 25 }, { nome: 'MSousa', idade: 25 }])}
                </p>

            </Layout>
        </>
    )
}