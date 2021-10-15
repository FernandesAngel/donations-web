import { Controller } from 'react-hook-form'
import ErrorMessage from '../ErrorMessage'
import { InputProps } from './interface'
import * as S from './styles'

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
      render={({ field: { onChange, onBlur, value } }) => (
        <S.Container>
          <input
            {...rest}
            onBlur={onBlur}
            onChange={onChange}
            value={currencyMask(value)}
          />
          <ErrorMessage message={errorMessage} />
        </S.Container>
      )}
    />
  )
}
