import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";
import { mq } from "../../theme"

export const Logo = styled(NavLink)`
    display: flex;
    gap: ${p => p.theme.space[2]}px;
    
    color: ${p => p.theme.colors.accent};

    text-decoration: none;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: 20px;

    ${mq[1]} {
       font-size: 30px;
    };

    ${mq[2]} {
        margin-right: 140px; 
    };
`;

export const StyledLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    border-radius: ${p => p.theme.radii.normal};
   
    color: ${p => p.theme.colors.mainText};

    text-decoration: none;
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};

    transition: ${p => p.theme.transition.main};

    ${mq[2]} {
        padding-top: ${p => p.theme.space[3]}px;
        padding-bottom: ${p => p.theme.space[3]}px;
        padding-left: ${p => p.theme.space[4]}px;
        padding-right: ${p => p.theme.space[4]}px;
    };
    
    &.active {
        color: ${p => p.theme.colors.white};
        background-color: #2063e4;
        box-shadow: ${p=>p.theme.shadows.button};
    }

    :hover:not(.active),
    :focus-visible:not(.active){
        color: #2063e4;
    }
`;