import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contactsSlice";
import { getContacts } from "redux/selectors";
import { nanoid } from 'nanoid';
import { Button } from "components/Button/Button";
import { BoxForm, FieldForm, InputForm, Error } from './ContactForm.styled';
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
const ContactForm = () => {
    const contacts = useSelector(getContacts);
    // Получаем ссылку на функцию отправки экшенов
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
            return alert(`${name} is already in contacts`);
            };

            const contact = {
                id: nanoid(),
                name,
                number,
            };

            // Вызываем генератор экшена и передаем имя и номер контакта для поля payload
            // Отправляем результат - экшен создания контакта
            dispatch(addContact(contact));

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
                    placeholder="Ivan Petrov"
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
                    placeholder="+38-(012)-345-67-89"
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {errors.number && touched.number &&<Error>{errors.number}</Error>}
            </FieldForm>    
            <Button type="submit">Add contact</Button>        
        </BoxForm> 
    );
};
    
export default ContactForm;

