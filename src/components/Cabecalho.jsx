import styles from '../styles/pComponente.module.css'

export default function Cabecalho(props){
    // props é somente leitura
    return (
        <header>
            <h1 className={styles.laypadraoLaranja}>{props.titulo1}</h1>
            <h2 className={styles.laypadraoCinza}>{props.titulo2}</h2>
        </header>
    )
}