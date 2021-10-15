import { forwardRef, ForwardRefRenderFunction } from 'react'
import { InputProps } from '../CurrencyInput/interface'
import ErrorMessage from '../ErrorMessage'
import * as S from './styles'

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { errorMessage, ...rest }: InputProps,
  ref
) => {
  return (
    <S.Container>
      <input {...rest} ref={ref} />
      <ErrorMessage message={errorMessage} />
    </S.Container>
  )
}

export const Input = forwardRef(InputBase)
