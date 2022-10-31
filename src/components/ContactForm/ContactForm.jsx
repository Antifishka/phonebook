import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { BoxForm, FieldForm, InputForm, BtnForm } from './ContactForm.styled';
    
export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    // Отвечает за обновление состояния
    handleChange = e => {
        const { name, value } = e.currentTarget;

        this.setState({[name]: value});
    };

    // Вызывается при отправке формы
    handleSubmit = evt => {
        evt.preventDefault();
        console.log(this.state);

        // Проп который передается форме для вызова при сабмите
        const { name, number } = this.state;
        this.props.onSubmit(name, number);

        this.reset();
    };

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        const nameId = nanoid();
        const numberId = nanoid();

        return (
            <BoxForm onSubmit={this.handleSubmit}>
                <FieldForm htmlFor={nameId}>Name
                    <InputForm
                        type="text"
                        name="name"
                        value={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                        id={nameId}
                    /> 
                </FieldForm>
                <FieldForm htmlFor={numberId}>Number
                    <InputForm
                        type="tel"
                        name="number"
                        value={this.state.number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChange}
                        id={numberId}
                    /> 
                </FieldForm>    
            
            <BtnForm type="submit">Add contact</BtnForm>        
        </BoxForm>
        
    );
    }
}
    
export default ContactForm
