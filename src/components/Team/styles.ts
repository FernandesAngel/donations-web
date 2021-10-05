import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 2.8rem;
  color: ${props => props.theme.colors.textPrimary};
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
`
