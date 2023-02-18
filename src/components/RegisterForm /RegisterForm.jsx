import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { FormContainer, Label, Input, Button, IconForm, Error } from './RegisterForm.styled';
import { FaUserEdit } from 'react-icons/fa';
import { MdEmail, MdLock } from 'react-icons/md';
import { theme } from 'theme';
import { Box } from "components/Box/Box";
import { useFormik } from 'formik';
import * as yup from 'yup';

const userSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Name is required'),
    email: yup
      .string()
      .email('Invalid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Too Short!')
      .required('Password is required'),
});

export const RegisterForm = ({onAdd}) => {
  const dispatch = useDispatch();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: userSchema,
    onSubmit: ({ name, email, password }, { resetForm }) => {
      dispatch(
        authOperations.register({
          name,
          email,
          password,
      }));  

      resetForm();
    },
  });

  return (
    <FormContainer onSubmit={handleSubmit} autoComplete="off">
      <Box fontSize={theme.fontSizes.l}
        fontWeight={theme.fontWeights.bold}
        as="h2">Register form</Box>
      <Label >
        Username
        <IconForm><FaUserEdit size={15} /></IconForm>
        <Input
          type="text"
          name="name"
          value={values.name}
          placeholder="Antifishka"
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.name && touched.name && <Error>{errors.name}</Error>}
      </Label>
      <Label >
        Email
        <IconForm><MdEmail size={15} /></IconForm>
        <Input
          type="email"
          name="email"
          value={values.email}
          placeholder="example@mail.com"
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.email && touched.email && <Error>{errors.email}</Error>}
      </Label>
      <Label >
        Password
        <IconForm><MdLock size={15} /></IconForm>
        <Input
          type="password"
          name="password"
          value={values.password}
          placeholder="Example123"
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.password && touched.password && <Error>{errors.password}</Error>}
      </Label>
      <Button type="submit">Register</Button>
    </FormContainer>
  );
}; 