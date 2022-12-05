import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { Button } from "components/Button/Button";
import { ContactText } from "./Contact.styled";
import { AiOutlineUserAdd } from 'react-icons/ai';
import PropTypes from 'prop-types';

export const Contact = ({ id, name, number } ) => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  // Вызываем генератор экшена и передаём идентификатор контакта
  // Отправляем результат - экшен удаления контакта
  const handleDelete = () => dispatch(deleteContact(id));
  
  return (
    <>
      <ContactText>
        <AiOutlineUserAdd size={18} color={"#1976d2"} />
        {name}: {number}
      </ContactText>
      <Button type = "button" onClick={handleDelete}>Delete</Button>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  
};