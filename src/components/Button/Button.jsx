import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ type = 'button', onClick, children }) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};