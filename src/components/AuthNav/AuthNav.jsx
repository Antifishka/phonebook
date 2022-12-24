import { StyledLink } from "./AuthNav.styled";
import { Box } from "components/Box/Box";

export const AuthNav = () => {
  return (
    <Box display="flex" gridGap={[2,2,3]}>
      <StyledLink to="/register">
        Register
      </StyledLink>
      <StyledLink to="/login">
        Log In
      </StyledLink>
    </Box>
  );
};