import styled from '@emotion/styled';

export const FieldFilter = styled.label`
    width: 100%;
`;

export const InputFilter = styled.input`
    margin-top: ${p => p.theme.space[2]}px; 
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    width: 100%;
    font: inherit;
    border-radius: ${p => p.theme.radii.normal};
    border: 1px solid rgba(33,33,33,0.2);
    background-color: inherit;

    ::placeholder {
        font-size: ${p => p.theme.fontSizes.s};
    }
`;