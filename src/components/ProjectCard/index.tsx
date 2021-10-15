import * as S from './styles'
import Image from 'next/image'
import Button from '../Button'
import { useCallback } from 'react'
import Router from 'next/router'
import { ProjectCardProps } from './interface'

export function ProjectCard({
  imageUrl,
  name,
  slug
}: ProjectCardProps): JSX.Element {
  const handleLink = useCallback(() => {
    Router.push(`projeto/${slug}`)
  }, [slug])

  return (
    <S.Container>
      <S.ContainerCard>
        <Image
          loader={() => imageUrl}
          src={imageUrl || '/noimage.png'}
          width={1200}
          height={828}
          unoptimized
        />
        <S.ContainerTitle>
          <S.Title>{name}</S.Title>
        </S.ContainerTitle>
      </S.ContainerCard>
      <S.ContainerButton>
        <Button title="Ver Mais" onClick={handleLink} />
      </S.ContainerButton>
    </S.Container>
  )
}
