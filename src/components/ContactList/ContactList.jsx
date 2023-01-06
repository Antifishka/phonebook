import { useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";
import { selectVisibleContacts } from "redux/contacts/contacts-selectors";
import { Contacts, ContactItem, Counter } from "./ContactList.styled";

export const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <>
            {visibleContacts.length > 0
                ? (<>
                    <Contacts> 
                        {visibleContacts.map(({ id, name, number }) =>
                            <ContactItem key={id}>
                                <Contact id={id} name={name} number={number} />
                            </ContactItem>)}
                    </Contacts>
                        <Counter>Total contacs: {visibleContacts.length}</Counter>
                    </>)
                : (<Contacts>There are no contacts</Contacts>)}
        </>
    );
}; 


