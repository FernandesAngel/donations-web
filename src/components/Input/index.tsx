import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react'
import ErrorMessage from '../ErrorMessage'
import * as S from './styles'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
}

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
