import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${props => props.theme.colors.secondBackground};
  border-radius: 0 0 350px 0;
  width: 100%;
  @media (max-width: 720px) {
    border-radius: 0 0 250px 0;
  }
  @media (max-width: 380px) {
    border-radius: 0 0 150px 0;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  @media (max-width: 1080px) {
    flex-direction: column-reverse;
  }
`
export const ContentLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
  h1 {
    color: ${props => props.theme.colors.textSecondary};
    font-size: 2.2rem;
  }
  p {
    margin-top: 16px;
    font-size: 1.2rem;
    color: ${props => props.theme.colors.textQuartenary};
    width: 100%;
    max-width: 500px;
  }
  @media (max-width: 1080px) {
    margin: 0 24px 40px;
    p {
      max-width: 500px;
    }
  }
  @media (max-width: 720px) {
    margin: 0 32px 40px;
    p {
      max-width: 360px;
    }
  }
  @media (max-width: 380px) {
    margin: 0 32px 40px;
    p {
      max-width: 270px;
    }
  }
`
export const ContentRight = styled.div`
  flex-basis: 45%;
  padding: 0 2.7rem;
  img {
    width: 100%;
  }
  @media (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    img {
      width: 40%;
    }
  }
  @media (max-width: 720px) {
    display: none;
  }
`
