import { Box } from "components/Box/Box";

export default function Home() {
  return (
    <Box minHeight= 'calc(100vh - 50px)'
      display= 'flex'
      alignItems= 'center'
      justifyContent= 'center'>
      <Box fontWeight= '700'
        fontSize={[5,6,7]}
        textAlign='center'
        as="h1">
        "Wellcome to Phonebook"{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Box>
    </Box>
  );
}