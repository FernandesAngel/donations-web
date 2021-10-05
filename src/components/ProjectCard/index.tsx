import * as S from './styles'
import Image from 'next/image'
import Button from '../Button'
export function ProjectCard(): JSX.Element {
  return (
    <S.Container>
      <S.Image>
        <Image src="/1.jpeg" width={1200} height={828} />
      </S.Image>
      <S.Content>
        <S.Title>Nosso projeto uuhu ola tudo bem</S.Title>
        <Button title="Ver Mais" />
      </S.Content>
    </S.Container>
  )
}
