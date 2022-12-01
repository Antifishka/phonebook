import styled from '@emotion/styled';

export const Contacts = styled.ul`
    min-width: 288px;
`;

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    font-size: 16px;

    :not(:first-of-type){
       border-top: 1px solid #2f2f37; 
    }
`;