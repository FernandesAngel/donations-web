import styled from 'styled-components'

export const Container = styled.header`
  /* height: 680px; */
  background-color: ${props => props.theme.colors.secondBackground};
  border-radius: 0 0 350px 0;
  width: 100%;
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
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
`
export const ContentRight = styled.div`
  flex-basis: 45%;
  padding: 0 2.7rem;
  img {
    width: 100%;
  }
`
