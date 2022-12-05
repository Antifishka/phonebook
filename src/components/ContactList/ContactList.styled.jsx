import styled from '@emotion/styled';

export const Contacts = styled.ul`
    min-width: ${p => p.theme.sizes.minWidth};
`;

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    font-size: ${p => p.theme.fontSizes.m};

    :not(:first-of-type){
       border-top: ${p => p.theme.borders.normal}; 
    }
`;