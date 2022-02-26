import Link from "next/link"
import Navegador from "../components/Navegador"

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
     
      <Navegador texto="JXS" destino="/entendendo" />
      <Navegador texto="Estiloso" destino="/estiloso" cor="rgb(98, 2, 189)" />
      <Navegador texto="PontoWeb" destino="/pComponente" cor="#cd4f04"/>
      <Navegador texto="IndexTets" destino="/test" cor="crimson" />
      <Navegador texto="TesteJF3" destino="/test/teste" cor="crimson" />

    </div>
  )
}