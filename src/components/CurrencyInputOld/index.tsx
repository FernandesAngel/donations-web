import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react'
import { Control, Controller } from 'react-hook-form'
import ErrorMessage from '../ErrorMessage'
import * as S from './styles'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  control: Control<any>
  nameInput: string | number
}
export function CurrencyInput({
  errorMessage,
  control,
  nameInput,
  ...rest
}: InputProps): JSX.Element {
  const currencyMask = (value: string | number): string => {
    return String(value)
      .replace(/\D/g, '')
      .replace(/(\d)/, 'R$ $1')
      .replace(/(\d)(\d{2})$/, '$1,$2')
      .replace(/(?=(\d{3})+(\D))\B/g, '.')
  }
  return (
    <Controller
      name={nameInput as string}
      control={control}
      render={
        ({ field: { onChange, onBlur, value } }) => (
          <S.Container>
            <input
              {...rest}
              onBlur={onBlur}
              onChange={onChange}
              value={currencyMask(value)}
            />
            <ErrorMessage message={errorMessage} />
          </S.Container>
        )
        // <Select
        //   {...field}
        //   options={[
        //     { value: "chocolate", label: "Chocolate" },
        //     { value: "strawberry", label: "Strawberry" },
        //     { value: "vanilla", label: "Vanilla" }
        //   ]}
        // />
      }
    />
  )
}
