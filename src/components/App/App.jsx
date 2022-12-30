import { Global } from '@emotion/react' 
import { GlobalStyles } from "./App.styled";
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { useEffect, lazy } from 'react';
import { useDispatch } from "react-redux";
import authOperations from '../../redux/auth/auth-operations';
import { useAuth } from 'hooks';
import { Loader } from 'components/Loader/Loader';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);
  
  return isRefreshing
    ? (<Loader/>)
    : (<>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          
          <Route path="/register"
            element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}
          />

          <Route path="/login"
            element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
          />
          
          <Route path="/contacts"
            element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
          />
        </Route>
      </Routes>

      <Global styles={GlobalStyles} />
    </>
    ); 
};
