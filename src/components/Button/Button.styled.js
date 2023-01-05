import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${p => p.theme.space[2]}px;
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    border-radius: ${p => p.theme.radii.normal};
    border: ${p => p.theme.borders.button};
    box-shadow: ${p => p.theme.shadows.button};
    outline: none;
    cursor: pointer;
    
    background-color: ${p => p.theme.colors.background};
    color: inherit;

    transition: ${p => p.theme.transition.main};

    :hover,
    :active{
        background-color: ${p => p.theme.colors.accent};
        border-color: ${p => p.theme.colors.accent};
        color: ${p => p.theme.colors.white};
    }    
`