import { useSelector, useDispatch } from "react-redux";
import { updateContact } from "redux/contacts/contacts-operations";
import { selectContacts } from "redux/contacts/contacts-selectors";
import { FaUserEdit, FaPhoneAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { nanoid } from 'nanoid';
import { BoxForm, FieldForm, InputForm, IconForm, ButtonForm, Error } from './ContactEditorUpdate.styled';
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
 
const ContactEditorUpdate = ({onUpdate, id}) => {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const contactById = contacts.filter(contact => contact.id === id);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: contactById[0].name,
            number: contactById[0].number,
        },
        validationSchema: basicSchema,
        onSubmit: ({ name, number }, { resetForm }) => {
            console.log(name, number);

            const contact = {
                id,
                name,
                number,
            };

            dispatch(updateContact(contact));
            toast.success('Contact updated');

            onUpdate();

            resetForm();
        },
    });

    const nameId = nanoid();
    const numberId = nanoid();

    return (
        <BoxForm onSubmit={handleSubmit}>
            <Box fontSize={theme.fontSizes.l}
                fontWeight={theme.fontWeights.bold}
                as="strong">Enter your changes</Box>
            <FieldForm htmlFor={nameId}>Name
                <IconForm><FaUserEdit size={15} /></IconForm>
                <InputForm
                    type="text"
                    name="name"
                    id={nameId}
                    value={values.name}
                    placeholder="Alexander Repeta"
                    onChange={handleChange}
                    onBlur={handleBlur}/> 
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
            <ButtonForm type="submit">Update</ButtonForm>        
        </BoxForm> 
    );
};
    
export default ContactEditorUpdate;

ContactEditorUpdate.propsType = {
    onUpdate: PropTypes.func.isRequired,
}