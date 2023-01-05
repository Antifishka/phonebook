import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks';
import { useMediaQuery } from 'usehooks-ts';
import { FaUserLock } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { Button } from 'components/Button/Button';
import { Box } from 'components/Box/Box';
import { theme } from 'theme';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <Box display="flex"
      gridGap={[1, 1, 2]}
      alignItems="center"
      fontWeight={theme.fontWeights.bold}>
      <FaUserLock color={theme.colors.accent}/>
      <p>{user.name}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        {matches ? "Logout" : ''}
        <MdLogout size={18} />
      </Button>
    </Box>
  );
};
