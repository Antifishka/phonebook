import { useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";
import { selectVisibleContacts } from "redux/contacts/contacts-selectors";
import { Contacts, ContactItem } from "./ContactList.styled";

export const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <Contacts>
            {visibleContacts.map(({ id, name, number }) =>
                <ContactItem key={id}>
                    <Contact id={id} name={name} number={number}/>
                </ContactItem>
            )}
        </Contacts>
    );
}; 


