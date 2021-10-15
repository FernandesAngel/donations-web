import { ButtonProps } from './interface'
import * as S from './styles'

const Button: React.FC<ButtonProps> = ({
  title,
  load,
  small = false,
  ...rest
}) => {
  return (
    <S.Container disabled={load} small={small} {...rest}>
      {title}
    </S.Container>
  )
}

export default Button
