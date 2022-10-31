import React from "react";
import { Global } from '@emotion/react' 
import { GlobalStyles, Container, TitlePhonebook, TitleContacts } from "./App.styled";
import ContactForm from "./ContactForm/ContactForm";
import { ContactlList } from "./ContactList/ContactList";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";

class Phonebook extends React.Component {
  state = {
    contacts: [],
    filter: ''
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;

    const normalizedName = name.toLocaleLowerCase();

    const checkByName = contacts.find(contact =>
      contact.name.toLocaleLowerCase() === normalizedName);

    if (checkByName) {
      return alert(`${name} is already in contacts`);
    };  

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    console.log(contacts);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))

    this.resetFilter();
  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }

  resetFilter = () => {
    this.setState({ filter: '' });
    }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }
    
  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Global styles={GlobalStyles} />
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <ContactForm onSubmit={this.addContact} />

        <TitleContacts>Contacts</TitleContacts>
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactlList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}

export default Phonebook;
