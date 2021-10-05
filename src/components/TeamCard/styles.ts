import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 20px; */
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 1.4rem;
`

export const Image = styled.div`
  width: 60%;
  border-radius: 50%;
  padding: 5px;
  background: #ffff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);

  img {
    border-radius: 50%;
  }
`
