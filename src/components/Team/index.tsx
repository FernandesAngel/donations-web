import * as S from './styles'
import { TeamCard } from '../TeamCard'
import { dataTeam } from './dataTeam'
export function Team(): JSX.Element {
  return (
    <S.Container>
      <S.Title>Nosso Time</S.Title>
      <S.Grid>
        {dataTeam.map(d => (
          <TeamCard key={d.id} team={d} />
        ))}
      </S.Grid>
    </S.Container>
  )
}
