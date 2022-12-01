// import useLocalStorage from "hooks/useLocalStorage";
import { Global } from '@emotion/react' 
import { GlobalStyles, Container, TitlePhonebook, TitleContacts } from "./App.styled";
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

function Phonebook() {
  return (
      <Container>
        <Global styles={GlobalStyles} />
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <ContactForm />

        <TitleContacts>Contacts</TitleContacts>
        <Filter />
        <ContactList />
      </Container>
    );
};

export default Phonebook;
