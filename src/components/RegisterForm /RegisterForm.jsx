import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { FormContainer, Label, Input, Button, IconForm } from './RegisterForm.styled';
import { FaUserEdit } from 'react-icons/fa';
import { MdEmail, MdLock } from 'react-icons/md';
import { theme } from 'theme';
import { Box } from "components/Box/Box";
import * as yup from 'yup';

const basicSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
        .required('Name is required'),
    email: yup
        .string()
        .matches()
        .required('Email is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      basicSchema.validate(
      authOperations.register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }))
    );
    form.reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit} autoComplete="off">
      <Box fontSize={theme.fontSizes.l}
        fontWeight={theme.fontWeights.bold}
        as="h2">Register form</Box>
      <Label >
        Username
        <IconForm><FaUserEdit size={15} /></IconForm>
        <Input type="text" name="name" placeholder="Antifishka"/>
      </Label>
      <Label >
        Email
        <IconForm><MdEmail size={15} /></IconForm>
        <Input type="email" name="email" placeholder="example@mail.com"/>
      </Label>
      <Label >
        Password
        <IconForm><MdLock size={15} /></IconForm>
        <Input type="password" name="password" placeholder="Example123"/>
      </Label>
      <Button type="submit">Register</Button>
    </FormContainer>
  );
};