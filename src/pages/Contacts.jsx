import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactEditor from 'components/ContactEditor/ContactEditor';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from "components/Filter/Filter";
import SyncLoader from "react-spinners/SyncLoader";
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { selectIsLoading, selectError } from 'redux/contacts/contacts-selectors';
import toast from 'react-hot-toast';
// import { Box } from '../Box/Box';
import { theme } from 'theme';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
    error && toast.error('No response from server!');
  }, [dispatch, error]);

  const showContacs = isLoading && !error;

  return (
    <main>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactEditor />
      <Filter />
      {showContacs ? <SyncLoader color={theme.colors.accent} /> : <ContactList />}
    </main>
  );
}