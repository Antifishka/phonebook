import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/contacts-operations";
import { Button } from "components/Button/Button";
import { ContactText, ContactPhone } from "./Contact.styled";
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdPhoneIphone } from 'react-icons/md';

import { Box } from '../Box/Box';
import PropTypes from 'prop-types';

export const Contact = ({ id, name, number } ) => {
  const dispatch = useDispatch();
  
  const handleDelete = () => dispatch(deleteContact(id));
  
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center" justifyContent="space-between" width="70%">
        <ContactText>
          <BsFillPersonFill />
          {name}
        </ContactText>
        <ContactPhone>
          <MdPhoneIphone />
          {number}
        </ContactPhone>
      </Box>
      
      <Button type="button" onClick={handleDelete}>
        <AiOutlineDelete size={18} />
      </Button>
    </Box>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};