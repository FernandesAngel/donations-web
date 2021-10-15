import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1060px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1080px) {
    max-width: 720px;
  }
  @media (max-width: 720px) {
    max-width: 360px;
  }
  @media (max-width: 380px) {
    max-width: 270px;
  }
`
export const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 2.8rem;
  color: ${props => props.theme.colors.textPrimary};
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 720px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`
