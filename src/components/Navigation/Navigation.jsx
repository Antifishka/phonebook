import { useAuth } from '../../hooks';
import { StyledLink } from './Navigation.styled';
import { Box } from "components/Box/Box";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box display="flex" gridGap={[2,2,3]} as="nav">
      <StyledLink to="/">
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">
          Contacts
        </StyledLink>
      )}
    </Box>
  );
};