import styled from '@emotion/styled';

export const ContactText = styled.p`
    display: flex;
    align-items: center;;
    gap: 4px;
    padding: 12px 0;
    
`

export const ContactBtn = styled.button`
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid #c9c5c5;
    box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
    outline: none;
    cursor: pointer;
    background-color: #e2e5e8;
    color: inherit;

    transition: background-color 250ms linear,
        border-color 250ms linear,
        color 250ms linear;

    :hover,
    :active{
        background-color: #1976d2;
        border-color: #1976d2;
        color: #fff;
    }
`;