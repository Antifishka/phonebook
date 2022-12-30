import { Box } from "components/Box/Box";
import SyncLoader from "react-spinners/SyncLoader";
import { theme } from 'theme';

export const Loader = () => (
    <Box position="fixed"
        top={0} bottom={0} left={0} right={0}
        display="flex" justifyContent="center" alignItems="center"
        height="100%">
        <SyncLoader color={theme.colors.accent}/>
    </Box>
  
);