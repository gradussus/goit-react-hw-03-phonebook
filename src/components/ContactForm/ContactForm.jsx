import { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const AddContactForm = styled.form`
  background-color: #b1cede;
  max-width: 450px;
  border-radius: 10px;
  text-align: center;
  padding: 25px;
`;

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const event = e.target;
    if (event.type === 'text') {
      this.setState({ name: event.value });
    }
    if (event.type === 'tel') {
      this.setState({ number: event.value });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <AddContactForm onSubmit={this.onSubmit} autoComplete="off">
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </AddContactForm>
    );
  }
}
