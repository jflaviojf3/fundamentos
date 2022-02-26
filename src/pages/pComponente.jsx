import Cabecalho from "../components/Cabecalho";
import Corpo from "../components/Corpo";
import Layout from "../components/Layout";
import styles from '../styles/pComponente.module.css'


export default function PComponente() {
    return (
        <body className={styles.fundo}>
            <Layout>
                <Cabecalho titulo1="PontoWeb PSCS" />
                <Cabecalho titulo2="Faça Login e marque seu ponto!" />
                <Corpo />
            </Layout>
        </body>
    )
}