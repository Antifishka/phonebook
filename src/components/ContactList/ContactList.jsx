import React from "react";
import { ContactItem, ContactBtn } from "./ContactList.styled";
import PropTypes from 'prop-types';

export const ContactlList = ({ contacts, onDeleteContact }) =>
    <ul>
        {contacts.map(({ id, name, number }) =>
            <ContactItem key={id}>
                <p>{name}: {number}</p>
                <ContactBtn onClick={()=> onDeleteContact(id)}>Delete</ContactBtn>
            </ContactItem>
        )}
    </ul>;

ContactlList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};    