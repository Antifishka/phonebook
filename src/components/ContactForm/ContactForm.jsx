import { nanoid } from 'nanoid';
import { BoxForm, FieldForm, InputForm, BtnForm, ErrorText } from './ContactForm.styled';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

// library yup
const schema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
        .required('Name is required'),
    number: yup
        .string()
        .matches(
            /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +')
        .required('Number is required'),
});
 
// Library formik
const INITIAL_VALUES = {
    name: '',
    number: '',
};

const ContactForm =({onSubmit}) => {
    const handleSubmit = (values, actions) => {
        console.log(values);
        
        const { name, number } = values;

        onSubmit(name, number);

        const { resetForm } = actions;

        resetForm();
    };

    const nameId = nanoid();
    const numberId = nanoid();

    return (
        <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={schema}
            onSubmit={handleSubmit} >
            <BoxForm>
                <FieldForm htmlFor={nameId}>Name
                    <InputForm
                        type="text"
                        name="name"
                        id={nameId} /> 
                    <ErrorMessage
                        name="name"
                        render={message => <ErrorText>{message}</ErrorText>} />
                </FieldForm>
                <FieldForm htmlFor={numberId}>Number
                    <InputForm
                        type="tel"
                        name="number"
                        id={numberId} />
                    <ErrorMessage
                        name="number"
                        render={message => <ErrorText>{message}</ErrorText>} />
                </FieldForm>    
                <BtnForm type="submit">Add contact</BtnForm>        
            </BoxForm>
        </Formik>  
    );
};
    
export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
