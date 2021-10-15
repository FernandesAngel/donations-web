import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  gap: 0;
  width: 100%;
  max-width: 1060px;
  margin: 88px auto;
  box-shadow: 0 0 10px 2px #d8cbf0;
  border-radius: 6px;
  @media (max-width: 1080px) {
    max-width: 720px;
  }
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    max-width: 360px;
  }
  @media (max-width: 380px) {
    max-width: 270px;
  }
`
export const ContentLeft = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 2rem;
  border-radius: 6px 0 0 6px;

  h1 {
    margin-bottom: 32px;
    color: ${props => props.theme.colors.textSecondary};
  }
  p {
    margin-top: 32px;
    font-size: 1.2rem;
  }
  img {
    border-radius: 6px;
  }
`
export const ContentRight = styled.form`
  width: 100%;
  background-color: ${props => props.theme.colors.secondBackground};
  padding: 2rem;
  border-radius: 0 6px 6px 0;
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  h1 {
    margin-bottom: 24px;
  }
`

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 40px;
  button {
    width: 40%;
  }
`
