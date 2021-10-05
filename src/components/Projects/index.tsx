import * as S from './styles'
import Image from 'next/image'
import { ProjectCard } from '../ProjectCard'
export function Projects(): JSX.Element {
  return (
    <S.Container>
      <S.Title>Nossos Projetos</S.Title>
      <S.Grid>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </S.Grid>
    </S.Container>
  )
}
