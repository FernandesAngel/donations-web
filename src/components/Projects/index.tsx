import * as S from './styles'
import { ProjectCard } from '../ProjectCard'
import { ListProjectsProps } from './interface'

export function Projects({ projects }: ListProjectsProps): JSX.Element {
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
