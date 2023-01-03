// import { useState } from 'react';
import { useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";
// import { Modal } from "components/Modal/Modal";
// import ContactEditorUpdate from 'components/ContactEditorUpdate/ContactEditorUpdate';
import { selectVisibleContacts } from "redux/contacts/contacts-selectors";
import { Contacts, ContactItem } from "./ContactList.styled";

export const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts);

    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const toggleModal = () => setIsModalOpen(state => !state);

    return (
        <>
            {visibleContacts.length > 0
                ? (<Contacts> 
                    {visibleContacts.map(({ id, name, number }) =>
                        <ContactItem key={id}>
                            <Contact id={id} name={name} number={number} />
                        </ContactItem>)}
                </Contacts>)
                : (<Contacts>There are no contacts</Contacts>)}
            
            {/* {isModalOpen && (
                <Modal onClose={toggleModal}>
                    <ContactEditorUpdate onUpdate={toggleModal} id={id}/>
                </Modal>
            )} */}
        </>
    );
}; 


