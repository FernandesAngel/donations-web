import * as S from './styles'
import Image from 'next/image'
export function Banner(): JSX.Element {
  return (
    <S.Container>
      <S.Content>
        <S.ContentLeft>
          <h1>Donate Lesgo</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English.
          </p>
        </S.ContentLeft>
        <S.ContentRight>
          {/* <Image src="/donate.svg" width={300} height={360} /> */}
          <img src="/donate.svg" alt="Doação" />
        </S.ContentRight>
      </S.Content>
    </S.Container>
  )
}
