import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks';
import { Box } from "components/Box/Box";
import { theme } from "theme";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="8px 0"
      mb={3}
      borderBottom={theme.borders.normal}
      as="header">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
