import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MdStar } from 'react-icons/md'
import Botao from '../components/Botao'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <Stack
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
         height: '100vh',
         width: '100vw',
        background: 'red'
      }}
    >
      <Box
        sx={{
          height: '400px',
          width: '500px',
          background: 'green'
        }}
      >
        <Botao 
      tamanho='small'
      modo='formulario'
        title='Olá' 
        icon={<MdStar />} />
      </Box>
    </Stack>
    </>
  )
}

export default Home
