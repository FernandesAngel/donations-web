import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Projects } from '../components/Projects'
import { Team } from '../components/Team'
import { api } from '../services/api'
import * as S from '../styles/pages/home'

export interface ProjectData {
  _id: string
  name: string
  description: string
  imageUrl: string
  slug: string
}
export default function Home({ projects }): JSX.Element {
  console.log('alo', projects)
  return (
    <S.Container>
      <Head>
        <title>Home | Donations</title>
      </Head>
      <Header />
      <Banner />
      <S.Content>
        <Projects projects={projects} />{' '}
      </S.Content>
      <S.Content>
        <Team />
      </S.Content>
      <Footer />
    </S.Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const responseProject = await api.get('projects-public')
  console.log('resp slug', responseProject.data)

  return {
    props: {
      projects: responseProject.data
    },
    // revalidate: 60 * 60 * 24 // 24 hours
    revalidate: 1 // 24 hours
  }
}
