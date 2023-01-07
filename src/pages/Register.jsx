import { Box } from 'components/Box/Box';
import { RegisterForm } from 'components/RegisterForm /RegisterForm';
import { Helmet } from 'react-helmet';


export default function Register() {
  return (
    <Box pt="16px" as="main">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Box>
  );
}