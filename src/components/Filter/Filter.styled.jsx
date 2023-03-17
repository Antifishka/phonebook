import styled from '@emotion/styled';

export const FieldFilter = styled.label`
    position: relative;
    width: 100%;
`;

export const InputFilter = styled.input`
    margin-top: ${p => p.theme.space[2]}px; 
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: 27px;
    padding-right: ${p => p.theme.space[3]}px;
    width: 100%;
    font: inherit;
    outline: transparent;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: ${p => p.theme.radii.normal};
    
    background-color: inherit;

    transition: ${p => p.theme.transition.main};

    :focus{
        border-color: ${p => p.theme.colors.accent};
    }

    ::placeholder {
        font-size: ${p => p.theme.fontSizes.s};
    }
`;

export const IconForm = styled.div`
    position: absolute;
    top: 15px;
    left: ${p => p.theme.space[3]}px;
`;