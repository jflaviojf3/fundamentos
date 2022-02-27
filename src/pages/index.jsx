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
      <Navegador texto="Estiloso" destino="/estiloso" cor="#9d00ff" />
      <Navegador texto="PontoWeb" destino="/pComponente" cor="#cd4f04"/>
      <Navegador texto="IndexTets" destino="/test" cor="crimson" />
      <Navegador texto="TesteJF3" destino="/test/teste" cor="rgb(98, 2, 189)" />
      <Navegador texto="Navegação Dinamica" destino="/cliente/pa-1/669912" cor="green" />
      <Navegador texto="Componente com Estado" destino="/estado" cor="black" />
      <Navegador texto="Integracao API #01" destino="/integracao_1" cor="gray" />
      <Navegador texto="Conteudo Estatico" destino="/estatico" cor="#4a3b5c" />
      <Navegador texto="Conteudo Dinamico" destino="/dinamico" cor="#0022ff" />

    </div>
  )
}