import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
    display: inline-block;
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.radii.normal};
   
    color: ${p => p.theme.colors.mainText};

    text-decoration: none;
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};

    transition: ${p => p.theme.transition.main};
    
    &.active {
        color: ${p => p.theme.colors.white};
        background-color: ${p => p.theme.colors.accent};
        box-shadow: ${p=>p.theme.shadows.button};
    }

    :hover:not(.active),
    :focus-visible:not(.active){
        color: ${p => p.theme.colors.accent};
    }
`;