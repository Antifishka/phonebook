import { Global } from '@emotion/react' 
import { GlobalStyles, TitlePhonebook, TitleContacts } from "./App.styled";
import ContactForm from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getError, getIsLoading } from "redux/selectors";
import { fetchContacts } from "redux/operations";
import { Box } from '../Box/Box';
import { theme } from 'theme';

function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Box>
  );
};

export default Phonebook;
