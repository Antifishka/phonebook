import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { ContactBtn } from "./Contact.styled";
import PropTypes from 'prop-types';

export const Contact = ({ id, name, number } ) => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  // Вызываем генератор экшена и передаём идентификатор контакта
  // Отправляем результат - экшен удаления контакта
  const handleDelete = () => dispatch(deleteContact(id));
  
  return (
    <>
      <p>{name}: {number}</p>
      <ContactBtn onClick={handleDelete}>Delete</ContactBtn>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  
};