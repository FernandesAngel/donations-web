import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'
export function Header(): JSX.Element {
  return (
    <S.Container>
      <Link href="/">
        <a>
          <Image src="/donation.png" width={210} height={77} />
        </a>
      </Link>
    </S.Container>
  )
}
