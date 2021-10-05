import * as S from './styles'
import Image from 'next/image'
import Button from '../Button'
import { CardTeamProps } from './interfaces'

export function TeamCard({ team }: CardTeamProps): JSX.Element {
  return (
    <S.Container>
      <S.Image>
        <Image src={team.avatar} width={600} height={600} />
      </S.Image>
      <S.Content>
        <S.Title>{team.name}</S.Title>
      </S.Content>
    </S.Container>
  )
}
