// import useLocalStorage from "hooks/useLocalStorage";
import { Global } from '@emotion/react' 
import { GlobalStyles, Container, TitlePhonebook, TitleContacts } from "./App.styled";
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

function Phonebook() {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);

  // const addContact = (name, number) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   const normalizedName = name.toLowerCase();

  //   const checkByName = contacts.find(contact =>
  //     contact.name.toLowerCase() === normalizedName);

  //   if (checkByName) {
  //     return alert(`${name} is already in contacts`);
  //   };  

  //   setContacts(prevContacts => [contact, ...prevContacts]);

  //   console.log(contacts);
  // };

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
