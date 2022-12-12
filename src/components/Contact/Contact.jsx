import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import { Button } from "components/Button/Button";
import { ContactText, ContactPhone } from "./Contact.styled";
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Box } from '../Box/Box';
import PropTypes from 'prop-types';
import { theme } from "theme";

export const Contact = ({ id, name, phone } ) => {
  const dispatch = useDispatch();
  
  const handleDelete = () => dispatch(deleteContact(id));
  
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center" justifyContent="space-between" width="70%">
        <ContactText>
        <AiOutlineUserAdd size={18} color={"#1976d2"} />
        {name}
        </ContactText>
        <ContactPhone>{phone}</ContactPhone>
      </Box>
      
      <Button type = "button" onClick={handleDelete}>Delete</Button>
    </Box>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};