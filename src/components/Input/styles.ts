import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px 0;
  min-height: 70px;
  input {
    width: 100%;
    height: 40px;
    border-radius: 6px;
    padding: 10px;
    border: 0;
    background-color: ${props => props.theme.colors.background};
    border: 2px solid ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textPrimary};
    outline: none;
    :focus {
      border: 2px solid ${props => props.theme.colors.textSecondary};
    }
    :-webkit-autofill {
      -webkit-text-fill-color: #fff;
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`
