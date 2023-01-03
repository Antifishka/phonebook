import { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/contacts-operations";
import { Modal } from "components/Modal/Modal";
import ContactEditorUpdate from 'components/ContactEditorUpdate/ContactEditorUpdate';
import { Button } from "components/Button/Button";
import { Avatar, Name, Phone } from "./Contact.styled";
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdPhoneIphone, MdOutlineEdit } from 'react-icons/md';
import { TbPhoneCall } from 'react-icons/tb';

import { Box } from '../Box/Box';
import PropTypes from 'prop-types';

export const Contact = ({ id, name, number } ) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);
  
  const handleDelete = () => dispatch(deleteContact(id));
  
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center" gridGap={3}>
        <Avatar
          src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
          alt="avatar" />
        <Box display="flex" flexDirection="column" alignItems="flex-start" gridGap={2}>
          <Name>
          <BsFillPersonFill />
          {name}
          </Name>
          <Phone>
            <MdPhoneIphone />
            {number}
          </Phone>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" gridGap={2}>
        <Button type="button" >
          <TbPhoneCall size={18} />
        </Button>

        <Button type="button" onClick={toggleModal} aria-label="Edit contact">
          <MdOutlineEdit size={18} />
        </Button>
        
        <Button type="button" onClick={handleDelete}>
          <AiOutlineDelete size={18} />
        </Button>
      </Box>

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <ContactEditorUpdate onUpdate={toggleModal} id={id}/>
        </Modal>
      )}
    </Box>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};