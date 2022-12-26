import styled from '@emotion/styled';
import { ButtonStyled } from 'components/Button/Button.styled';
import { theme } from 'theme';

export const BoxForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${p => p.theme.space[4]}px;

    min-width: ${p => p.theme.sizes.minWidth};
    max-width: ${p => p.theme.sizes.maxWidth};
    border: ${p => p.theme.borders.button};
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.boxShadow};
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
    margin-left: auto;
    margin-right: auto;

    background-color: #fff;
`;

export const FieldForm = styled.label`
    width: 100%;
    text-align: left;
`;

export const InputForm = styled.input`
    margin-top: ${p => p.theme.space[2]}px; 
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    width: 100%;
    font: inherit;

    ::placeholder {
        font-size: ${p => theme.fontSizes.s};
    }
`;

export const ButtonForm = styled(ButtonStyled)`
    display: flex;
    align-items: center;;
    gap: ${p => p.theme.space[2]}px;
    /* padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    min-width: 124px; */
`;

export const Error = styled.p`
    color: ${p => p.theme.colors.error};
`;