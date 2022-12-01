import styled from '@emotion/styled';

export const BoxForm = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;

    min-width: 288px;
    border: 1px solid #c9c5c5;
    border-radius: 4px;
    box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
    padding: 16px;
    margin-bottom: 16px;
`;

export const FieldForm = styled.label`
    width: 100%;
    text-align: left;
`;

export const InputForm = styled.input`
    margin-top: 4px; 
    padding: 8px;
    width: 100%;
    font: inherit;

    ::placeholder {
    font-size: 14px;
    }
`;

export const BtnForm = styled.button`
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid #c9c5c5;
    box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
    outline: none;
    cursor: pointer;
    background-color: #e2e5e8;
    color: inherit;

    transition: background-color border 250ms linear;

    :hover,
    :active{
        background-color: #1976d2;
        border-color: #1976d2;
        color: #fff;
    }
`;

export const Error = styled.p`
    color: red;
`;