import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import { Button } from "components/Button/Button";
import { ContactText } from "./Contact.styled";
import { AiOutlineUserAdd } from 'react-icons/ai';
import PropTypes from 'prop-types';

export const Contact = ({ id, name, phone } ) => {
  const dispatch = useDispatch();
  
  const handleDelete = () => dispatch(deleteContact(id));
  
  return (
    <>
      <ContactText>
        <AiOutlineUserAdd size={18} color={"#1976d2"} />
        {name}: {phone}
      </ContactText>
      <Button type = "button" onClick={handleDelete}>Delete</Button>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};