import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../assets/avatar.png'
import Animal from '../assets/animal.svg'
import * as S from '../styles/pages/home'

const Home: React.FC = () => {
  const [teste] = useState('Setup do Projeto')
  return (
    <S.Container>
      <Head>
        <title>Página Home</title>
      </Head>
      <S.Content>
        <Image src={Logo} alt="teste" width={200} height={200} />
        <h1>{teste}</h1>
        <S.WrapperSvg>
          <Animal />
        </S.WrapperSvg>

        <p>Estrutura inicial com Next JS 10</p>
      </S.Content>
    </S.Container>
  )
}

export default Home
