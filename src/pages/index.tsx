import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MdStar } from 'react-icons/md'
import Botao from '../components/Botao'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <Botao 
    tamanho='small'
     modo='formulario'
      title='Olá' 
      icon={<MdStar />} />
    </>
  )
}

export default Home
