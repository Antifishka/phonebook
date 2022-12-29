import styled from '@emotion/styled';

export const FieldFilter = styled.label`
    position: relative;
    width: 100%;
`;

export const InputFilter = styled.input`
    margin-top: ${p => p.theme.space[2]}px; 
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: 26px;
    padding-right: ${p => p.theme.space[3]}px;
    width: 100%;
    font: inherit;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: ${p => p.theme.radii.normal};
    
    background-color: inherit;

    transition: ${p => p.theme.transition.main};

    ::placeholder {
        font-size: ${p => p.theme.fontSizes.s};
    }

    :focus{
        border-color: ${p => p.theme.colors.accent};
        outline: 1px solid #1976d2;
    }
`;

export const IconForm = styled.div`
    position: absolute;
    top: 15px;
    left: ${p => p.theme.space[3]}px;
`;