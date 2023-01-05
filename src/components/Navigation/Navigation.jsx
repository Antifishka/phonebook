import { useAuth } from '../../hooks';
import { useMediaQuery } from 'usehooks-ts';
import { Logo, StyledLink } from './Navigation.styled';
import { AiFillHome } from 'react-icons/ai';
import { MdPermContactCalendar } from 'react-icons/md';
import { Box } from "components/Box/Box";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <Box display="flex" gridGap={[1, 2, 3]} as="nav">
      <Logo to="/">
        <img src="https://play-lh.googleusercontent.com/7O6Mvzvsy_gxPY7IPHN5iJWo9CB9CEeUvs8Ha1m1v0fctHD-tLwBR6TycZ45V-5aGkE=w480-h960-rw"
          alt="phonebook"
          width="32px" />
        {matches ? 'PhoneBook' : ''}
      </Logo>
      <StyledLink to="/">
        {matches ? 'Home' : <AiFillHome size={18}/>}
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">
          {matches ? 'Contacts' : <MdPermContactCalendar size={18}/>}
        </StyledLink>
      )}
    </Box>
  );
};