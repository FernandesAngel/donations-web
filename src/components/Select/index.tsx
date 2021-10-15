import { forwardRef, ForwardRefRenderFunction } from 'react'
import ErrorMessage from '../ErrorMessage'
import { SelectProps } from './interface'
import * as S from './styles'

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { errorMessage, ...rest }: SelectProps,
  ref
) => {
  return (
    <S.Container>
      <select {...rest} ref={ref}>
        <option value="">Selecione um meio de pagamento</option>
        <option value="Pix">Pix</option>
        <option value="Cartão">Cartão</option>
        <option value="Transferência">Transferência</option>
      </select>
      <ErrorMessage message={errorMessage} />
    </S.Container>
  )
}

export const Select = forwardRef(SelectBase)
