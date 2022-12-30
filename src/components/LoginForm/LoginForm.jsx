import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { FormContainer, Label, Input, Button } from './LoginForm.styled';
import { theme } from 'theme';
import { Box } from "components/Box/Box";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authOperations.logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit} autoComplete="off">
      <Box fontSize={theme.fontSizes.l}
        fontWeight={theme.fontWeights.bold}
        as="h2">Login form</Box>
      <Label >
        Email
        <Input type="email" name="email" placeholder="example@mail.com" />
      </Label >
      <Label >
        Password
        <Input type="password" name="password" placeholder="Example123" />
      </Label >
      <Button type="submit">Login</Button>
    </FormContainer>
  );
};