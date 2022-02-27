<<<<<<< HEAD
=======
import { useState } from "react";
>>>>>>> b056d244bee8b39aaa5ce3f72fdf16336b3834fd
import Image from "next/image";
import Layout from "../components/Layout";

const url_base = 'https://api.themoviedb.org/3/movie/'
const api_key = '?api_key=cf685687cdf045ffd9f20522b5d1c064'

const myLoader = ({ src, width, quality }) => {
<<<<<<< HEAD
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
=======
    return `https://image.tmdb.org/t/p/w500${src}`
  }

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function selecaoFilme(filme){
        console.log(url_base+filme+api_key)
         return url_base+filme+api_key
}
export async function getServerSideProps() {

  const res = await fetch(
      
    selecaoFilme(getRandomIntInclusive(100, 999))
    
    );
    const data = await res.json();
  //   const myLoader = ({src}) => {
  //     return `https://image.tmdb.org/t/p/w500${src}`
  //   }
  return {
    props: {
      data,
      //props1: myLoader()
>>>>>>> b056d244bee8b39aaa5ce3f72fdf16336b3834fd
    },
  };
}

export default function Dinamico(props) {
  return (
    <Layout titulo="Conteudo Dinamico de API Externa!">
      <h3>Conteudo da API TMDB</h3>
      <p>Atualize a pagina para encontrar o filme</p>
<<<<<<< HEAD
      <Image loader={myLoader} src={props.data.poster_path} width="150px" height="150px" />
=======
      <Image loader={myLoader} src={props.data.poster_path} width="150px" height="150px"/>
>>>>>>> b056d244bee8b39aaa5ce3f72fdf16336b3834fd
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
