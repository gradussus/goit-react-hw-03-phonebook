import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList ';
import { Filter } from './Filter/Filter';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(10), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(10), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(10), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(10), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) })
    }
}

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
    }
  }
  
  addContact = ({ name, number }) => {
    const includeName = name => {
      return this.state.contacts.find(
        e => e.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      );
    };
    const includeNumber = number => {
      return this.state.contacts.find(e => e.number === number);
    };

    const contact = {
      id: nanoid(10),
      name,
      number,
    };
    if (includeName(contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }
    if (includeNumber(contact.number)) {
      return alert(`${contact.number} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = e => {
    const id = e.currentTarget.id;

    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(el => el.id !== id)],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filtredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        
        {this.state.contacts.length !== 0 ? <> <Filter value={this.filter} changeFilter={this.changeFilter} /> <ContactList
          contacts={this.filtredContacts()}
          deleteCont={this.deleteContact}
        /></> : <div>
            Your contacts are not here yet, but you can add contacts in the form above and save them in this app
        </div>}
        
      </Container>
    );
  }
}
