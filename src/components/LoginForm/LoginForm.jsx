import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { FormContainer, Label, Input, Button, IconForm, Error } from './LoginForm.styled';
import { MdEmail, MdLock } from 'react-icons/md';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { theme } from 'theme';
import { Box } from "components/Box/Box";

const userSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Too Short!')
      .required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: userSchema,
    onSubmit: ({ email, password }, { resetForm }) => {
      dispatch(
        authOperations.logIn({
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
        as="h2">Login form</Box>
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
      </Label >
      <Label >
        Password
        <IconForm><MdLock size={15} /></IconForm>
        <Input
          type="password"
          name="password"
          value={values.password}
          placeholder="Example123"
          onChange={handleChange}
          onBlur={handleBlur}/>
        {errors.password && touched.password && <Error>{errors.password}</Error>}
      </Label >
      <Button type="submit">Login</Button>
    </FormContainer>
  );
};