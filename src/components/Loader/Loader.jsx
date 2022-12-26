import { Box } from "components/Box/Box";
import SyncLoader from "react-spinners/SyncLoader";
import { theme } from 'theme';

export const Loader = () => (
    <Box display="flex" justifyContent="center">
        <SyncLoader color={theme.colors.accent}/>
    </Box>
  
);