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

export const LogoImg = styled.img`
    /* animation: swirl-in-fwd 0.6s ease-out both;

    @-webkit-keyframes swirl-in-fwd {
        0% {
            -webkit-transform: rotate(-540deg) scale(0);
            transform: rotate(-540deg) scale(0);
            opacity: 0;
        }

        100% {
            -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
            opacity: 1;
        }
    }

    @keyframes swirl-in-fwd {
        0% {
            -webkit-transform: rotate(-540deg) scale(0);
            transform: rotate(-540deg) scale(0);
            opacity: 0;
        }

        100% {
            -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
            opacity: 1;
        }
    }

    ${mq[1]} {
            animation: none;
        }; */
`

export const LogoText = styled.p`
    animation: tracking-in-contract-bck 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;

    @-webkit-keyframes tracking-in-contract-bck {
        0% {
            letter-spacing: 1em;
            -webkit-transform: translateZ(400px);
            transform: translateZ(400px);
            opacity: 0;
        }

        40% {
            opacity: 0.6;
        }

        100% {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            opacity: 1;
        }
    }

    @keyframes tracking-in-contract-bck {
        0% {
            letter-spacing: 1em;
            -webkit-transform: translateZ(400px);
            transform: translateZ(400px);
            opacity: 0;
        }

        40% {
            opacity: 0.6;
        }

        100% {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            opacity: 1;
        }
    }
`

export const StyledLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-left: ${p => p.theme.space[2]}px;
    padding-right: ${p => p.theme.space[2]}px;
    border-radius: ${p => p.theme.radii.normal};
   
    color: ${p => p.theme.colors.mainText};

    text-decoration: none;
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};

    transition: ${p => p.theme.transition.main};

    ${mq[1]} {
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