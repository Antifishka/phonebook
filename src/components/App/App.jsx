import { Global } from '@emotion/react' 
import { GlobalStyles } from "./App.styled";
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { useEffect, lazy } from 'react';
import { useDispatch } from "react-redux";
import authOperations from '../../redux/auth/auth-operations';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>

      <Global styles={GlobalStyles} />
    </>
      
  );
};

// {/* <Box
//        maxWidth={theme.sizes.maxWidth}
//        my={0}
//        mx={"auto"}
//        p={3}
//        textAlign="center"
//        as="main">
//        <TitlePhonebook>Phonebook</TitlePhonebook>
//        <ContactForm />

//        <TitleContacts>Contacts</TitleContacts>
//        <Filter />
//        {showContacs ? <SyncLoader color={theme.colors.accent} /> : <ContactList />}
//      </Box> */}