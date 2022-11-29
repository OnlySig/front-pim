import { ButtonContainer } from './style'
import { Ibutton } from './types';

const Button = ({title, variant="primary", onClick}: Ibutton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}
export { Button }