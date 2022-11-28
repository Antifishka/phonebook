import { nanoid } from 'nanoid';
import { BoxForm, FieldForm, InputForm, BtnForm, Error } from './ContactForm.styled';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as yup from 'yup';

// library yup
const basicSchema = yup.object().shape({
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
const ContactForm = ({ onSubmit }) => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            number: '',
        },
        validationSchema: basicSchema,
        onSubmit: (values, actions) => {
            console.log(values);
        
            const { name, number } = values;

            onSubmit(name, number);

            const { resetForm } = actions;

            resetForm();
        },
    });

    const nameId = nanoid();
    const numberId = nanoid();

    return (
        <BoxForm onSubmit={handleSubmit}>
            <FieldForm htmlFor={nameId}>Name
                <InputForm
                    type="text"
                    name="name"
                    id={nameId}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur} /> 
                {errors.name && touched.name && <Error>{errors.name}</Error>}
            </FieldForm>
            <FieldForm htmlFor={numberId}>Number
                <InputForm
                    type="tel"
                    name="number"
                    id={numberId}
                    value={values.number}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {errors.number && touched.number &&<Error>{errors.number}</Error>}
            </FieldForm>    
            <BtnForm type="submit">Add contact</BtnForm>        
        </BoxForm> 
    );
};
    
export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
