import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Projects } from '../components/Projects'
import { Team } from '../components/Team'
import * as S from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <S.Container>
      <Head>
        <title>Home | Donations</title>
      </Head>
      <Header />
      <Banner />
      <S.Content>
        <Projects />
      </S.Content>
      <S.Content>
        <Team />
      </S.Content>
      <Footer />
    </S.Container>
  )
}

export default Home
