import styled from '@emotion/styled';
import { ButtonStyled } from 'components/Button/Button.styled';
import { theme } from 'theme';

export const BoxForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[4]}px;

    text-align: center;
`;

export const FieldForm = styled.label`
    position: relative;   
    width: 100%;
    text-align: left;
    font-size: ${p => theme.fontSizes.s};

    transition: ${p => p.theme.transition.main};

    :focus-within{
        color: ${p => p.theme.colors.accent};
    }
`;

export const InputForm = styled.input`
    margin-top: ${p => p.theme.space[1]}px; 
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: 26px;
    padding-right: ${p => p.theme.space[3]}px;
    width: 100%;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: ${p => p.theme.radii.normal};

    font: inherit;
    font-size: ${p => theme.fontSizes.m};

    background-color: #fff;

    ::placeholder {
        font-size: ${p => theme.fontSizes.s};
    }
`;

export const IconForm = styled.div`
    position: absolute;
    top: 30px;
    left: ${p => p.theme.space[3]}px;
`;

export const ButtonForm = styled(ButtonStyled)`
    display: flex;
    align-items: center;;
    gap: ${p => p.theme.space[2]}px;
    margin: 0 auto;
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
`;

export const Error = styled.p`
    color: ${p => p.theme.colors.error};
`;