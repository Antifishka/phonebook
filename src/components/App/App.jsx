import { Global } from '@emotion/react' 
import { GlobalStyles, TitlePhonebook, TitleContacts } from "./App.styled";
import ContactForm from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { Box } from '../Box/Box';
import { theme } from 'theme';

function Phonebook() {
  return (
    <Box
      maxWidth={theme.sizes.maxWidth}
      my={0}
      mx={"auto"}
      p={3}
      textAlign={"center"}
      as="main">
      <Global styles={GlobalStyles} />
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />

      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
    </Box>
  );
};

export default Phonebook;
