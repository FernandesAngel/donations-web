import * as S from './styles'
import Image from 'next/image'
export function Footer(): JSX.Element {
  return (
    <S.Container>
      <Image src="/donation.png" width={210} height={77} />
    </S.Container>
  )
}
