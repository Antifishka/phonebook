import { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/contacts-operations";
import { Modal } from "components/Modal/Modal";
import ContactEditorUpdate from 'components/ContactEditorUpdate/ContactEditorUpdate';
import { ContactInfo, Avatar, Name, Phone, BoxButton, ContactButton } from "./Contact.styled";
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdPhoneIphone, MdOutlineEdit } from 'react-icons/md';
import { TbPhoneCall } from 'react-icons/tb';
import { Box } from '../Box/Box';
import { useMediaQuery } from 'usehooks-ts';
import PropTypes from 'prop-types';

export const Contact = ({ id, name, number } ) => {
  const dispatch = useDispatch();
  const matches = useMediaQuery('(min-width: 320px)');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(state => !state);
  
  const handleDelete = () => dispatch(deleteContact(id));
  
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <ContactInfo>
        <Avatar
          src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
          alt="avatar" />
        <Box display="flex" flexDirection="column" alignItems="flex-start" gridGap={[1, 2]}
          minWidth="114px">
          <Name>
            <BsFillPersonFill />
          {name}
          </Name>
          <Phone>
            <MdPhoneIphone />
            {number}
          </Phone>
        </Box>
      </ContactInfo>

      <BoxButton  >
        <ContactButton type="button" >
          <TbPhoneCall size={matches ? "18" : "15"} />
        </ContactButton>

        <ContactButton type="button" onClick={toggleModal} aria-label="Edit contact">
          <MdOutlineEdit size={matches ? "18" : "15"}  />
        </ContactButton>
        
        <ContactButton type="button" onClick={handleDelete}>
          <AiOutlineDelete size={matches ? "18" : "15"}  />
        </ContactButton>
      </BoxButton>

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