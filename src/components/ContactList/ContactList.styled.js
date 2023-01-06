import styled from '@emotion/styled';
import { mq } from "../../theme"

export const Contacts = styled.ul`
    position: relative;
    max-width: ${p => p.theme.sizes.mediumWidth};
    margin: 0 auto 8px auto;
    background-color: ${p => p.theme.colors.white};
    padding: ${p => p.theme.space[4]}px;
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    border-radius: ${p => p.theme.radii.box};
    box-shadow: ${p => p.theme.shadows.box};

    text-align: center;

    ${mq[2]} {
        margin-bottom: ${p => p.theme.space[4]}px;
        };
`;

export const ContactItem = styled.li`
    width: 100%;
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-left: ${p => p.theme.space[0]}px;
    padding-right: ${p => p.theme.space[0]}px;
    
    font-size: ${p => p.theme.fontSizes.m};

    transform: scale(1);
    transition: ${p => p.theme.transition.main};

    :not(:first-of-type){
       border-top: ${p => p.theme.borders.normal}; 
    }

    :hover{
        position: absolute;
        transform: scale(1.02);
        width: 100%;
        right: 0;
        z-index: 2;
        padding: ${p => p.theme.space[4]}px;
        padding-top: ${p => p.theme.space[3]}px;
        padding-bottom: ${p => p.theme.space[3]}px;
        
        border-top: ${p => p.theme.borders.none}; 
        border-radius: ${p => p.theme.radii.box};
        box-shadow: ${p => p.theme.shadows.box};

        background-color: ${p => p.theme.colors.white};
    } 
`;

export const Counter = styled.p`
    color: ${p => p.theme.colors.accent};
    text-align: center;
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.xs};

    ${mq[1]} {
        font-size: ${p => p.theme.fontSizes.s};
        }; 

    ${mq[2]} {
        font-size: ${p => p.theme.fontSizes.m};
        }; 
`;