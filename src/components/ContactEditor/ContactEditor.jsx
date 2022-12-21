import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contacts/contacts-operations";
import { selectContacts, selectIsFormLoading } from "redux/contacts/contacts-selectors";
import toast from 'react-hot-toast';
import { nanoid } from 'nanoid';
import { BoxForm, FieldForm, InputForm, ButtonForm, Error } from './ContactEditor.styled';
import { useFormik } from 'formik';
import * as yup from 'yup';

const basicSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
        .required('Name is required'),
    phone: yup
        .string()
        .matches(
            /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +')
        .required('Number is required'),
});
 
const ContactEditor = () => {
    const contacts = useSelector(selectContacts);
    const isFormLoading = useSelector(selectIsFormLoading);
    const dispatch = useDispatch();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            phone: '',
        },
        validationSchema: basicSchema,
        onSubmit: ({ name, phone }, { resetForm }) => {
            console.log(name, phone);

            const normalizedName = name.toLowerCase();

            const checkByName = contacts.find(contact =>
                contact.name.toLowerCase() === normalizedName);

            if (checkByName) {
                return toast(`${name} is already in contacts.`, { icon: 'ℹ️'});
            };

            const contact = {
                name,
                phone,
            };

            dispatch(addContact(contact));
            toast.success('Contact added!');

            resetForm();
        },
    });

    const nameId = nanoid();
    const phoneId = nanoid();

    return (
        <BoxForm onSubmit={handleSubmit}>
            <FieldForm htmlFor={nameId}>Name
                <InputForm
                    type="text"
                    name="name"
                    id={nameId}
                    value={values.name}
                    placeholder="Ivan Petrov"
                    onChange={handleChange}
                    onBlur={handleBlur} /> 
                {errors.name && touched.name && <Error>{errors.name}</Error>}
            </FieldForm>
            <FieldForm htmlFor={phoneId}>Phone number
                <InputForm
                    type="tel"
                    name="phone"
                    id={phoneId}
                    value={values.phone}
                    placeholder="+38-(012)-345-67-89"
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {errors.phone && touched.phone &&<Error>{errors.phone}</Error>}
            </FieldForm>    
            <ButtonForm type="submit">{isFormLoading ? 'Adding...' : 'Add contact'}
            </ButtonForm>        
        </BoxForm> 
    );
};
    
export default ContactEditor;

