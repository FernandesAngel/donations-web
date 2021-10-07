import * as S from './styles'
import Image from 'next/image'
import { ProjectCard } from '../ProjectCard'
import { useProject } from '../../hooks/project'
import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import { api } from '../../services/api'

interface ProjectsProps {
  _id: string
  name: string
  description: string
  imageUrl: string
  slug: string
}
interface ListProjectsProps {
  projects: ProjectsProps[]
}
export function Projects({ projects }: ListProjectsProps): JSX.Element {
  console.log('dentro', projects)

  return (
    <S.Container>
      <S.Title>Nossos Projetos</S.Title>

      <S.Grid>
        {projects.length <= 0 ? (
          <p>Nenhum projeto cadastrado</p>
        ) : (
          <>
            {projects.map(p => (
              <ProjectCard
                key={p._id}
                name={p.name}
                imageUrl={p.imageUrl}
                slug={p.slug}
              />
            ))}
          </>
        )}
      </S.Grid>
    </S.Container>
  )
}
