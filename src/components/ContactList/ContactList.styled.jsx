import styled from '@emotion/styled';

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 280px;
    font-size: 16px;
`;

export const ContactBtn = styled.button`
    border: 1px solid #c9c5c5;
    border-radius: 4px;
    box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
    outline: none;
    cursor: pointer;
    background-color: #fff;

    transition: background-color border 250ms linear;

    :active{
        background-color: blue;
        border: none;
    }
`;