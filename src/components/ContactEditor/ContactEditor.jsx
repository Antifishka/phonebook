import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contacts/contacts-operations";
import { selectContacts, selectIsFormLoading } from "redux/contacts/contacts-selectors";
import { FaUserEdit, FaPhoneAlt } from 'react-icons/fa';
import { BsPersonPlus } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { nanoid } from 'nanoid';
import { BoxForm, FieldForm, InputForm, IconForm, ButtonForm, Error } from './ContactEditor.styled';
import { useFormik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { theme } from 'theme';
import { Box } from "components/Box/Box";

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
 
const ContactEditor = ({onAdd}) => {
    const contacts = useSelector(selectContacts);
    const isFormLoading = useSelector(selectIsFormLoading);
    const dispatch = useDispatch();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            number: '',
        },
        validationSchema: basicSchema,
        onSubmit: ({ name, number }, { resetForm }) => {
            console.log(name, number);

            const normalizedName = name.toLowerCase();

            const checkByName = contacts.find(contact =>
                contact.name.toLowerCase() === normalizedName);

            if (checkByName) {
                return toast(`${name} is already in contacts.`, { icon: 'ℹ️'});
            };

            const contact = {
                name,
                number,
            };

            dispatch(addContact(contact));
            toast.success('Contact added!');

            onAdd();

            resetForm();
        },
    });

    const nameId = nanoid();
    const numberId = nanoid();

    return (
        <BoxForm onSubmit={handleSubmit}>
            <Box fontSize={theme.fontSizes.l}
                fontWeight={theme.fontWeights.bold}
                as="strong">Create new contact</Box>
            <FieldForm htmlFor={nameId}>Name
                <IconForm><FaUserEdit size={15} /></IconForm>
                <InputForm
                    type="text"
                    name="name"
                    id={nameId}
                    value={values.name}
                    placeholder="Alexander Repeta"
                    onChange={handleChange}
                    onBlur={handleBlur} /> 
                {errors.name && touched.name && <Error>{errors.name}</Error>}
            </FieldForm>
            <FieldForm htmlFor={numberId}>Phone number
                <IconForm><FaPhoneAlt size={14} /></IconForm>
                <InputForm
                    type="tel"
                    name="number"
                    id={numberId}
                    value={values.number}
                    placeholder="+38-(012)-345-67-89"
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {errors.number && touched.number &&<Error>{errors.number}</Error>}
            </FieldForm>    
            <ButtonForm type="submit">{isFormLoading ? 'Adding...' : 'Add contact'}
                <BsPersonPlus />
            </ButtonForm>        
        </BoxForm> 
    );
};
    
export default ContactEditor;

ContactEditor.propsType = {
  onSubmit: PropTypes.func.isRequired,
}

