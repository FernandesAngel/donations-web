import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.colors.textTertiary};
  border-radius: 6px;
  box-shadow: 0 0 10px 2px #d8cbf0;
  /* padding: 20px; */
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.textQuartenary};
  margin-bottom: 16px;
  font-weight: 300;
  font-size: 1.4rem;
`

export const Image = styled.div`
  width: 100%;
  img {
    border-radius: 6px 6px 0 0;
  }
`
