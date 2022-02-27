import Image from "next/image";
import Layout from "../components/Layout";

const url_base = 'https://api.themoviedb.org/3/movie/'
const api_key = '?api_key=cf685687cdf045ffd9f20522b5d1c064'

const myLoader = ({ src, width, quality }) => {
  return `https://image.tmdb.org/t/p/w500${src}`
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function selecaoFilme(filme) {
  return url_base + filme + api_key
}

export async function getServerSideProps() {


  const res = await fetch(
    selecaoFilme(getRandomIntInclusive(100, 999))
  );


  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Dinamico(props) {
  return (
    <Layout titulo="Conteudo Dinamico de API Externa!">
      <h3>Conteudo da API TMDB</h3>
      <p>Atualize a pagina para encontrar o filme</p>
      <Image loader={myLoader} src={props.data.poster_path} width="150px" height="150px" />
      <div>
        <ul>
          <li>Titulo Original: {props.data.original_title}</li>
          <li>Site: {props.data.homepage}</li>
          <li>Popularidade: {props.data.popularity}</li>
          <li>Descrição: {props.data.overview}</li>
        </ul>
      </div>
    </Layout>
  );
}