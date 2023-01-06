import styled from '@emotion/styled';
import { ButtonStyled } from 'components/Button/Button.styled';
import { mq } from "../../theme"

export const ContactInfo = styled.div`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.space[2]}px;   

    ${mq[1]} {
        gap: ${p => p.theme.space[3]}px; 
    }; 

    ${mq[2]} {
        gap: ${p => p.theme.space[4]}px; 
    };
`;

export const Avatar = styled.img`
    border-radius: 50%;
    overflow: hidden;
    /* background-color: #f4f4f4; */
    background-color: ${p => p.theme.colors.accent};
    width: 30px;

    ${mq[0]} {
        width: 40px;
        };

    ${mq[1]} {
        width: 50px;
        };    
`;

export const Name = styled.p`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.space[1]}px;
    font-size: ${p => p.theme.fontSizes.xs};
    text-align: left;

    ${mq[1]} {
        font-size: ${p => p.theme.fontSizes.s};
        }; 

    ${mq[2]} {
        font-size: ${p => p.theme.fontSizes.m};
        };    
`;

export const Phone = styled.p`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.space[1]}px;
    font-size: ${p => p.theme.fontSizes.xs};

    ${mq[1]} {
        font-size: ${p => p.theme.fontSizes.s};
        };

    ${mq[2]} {
        font-size: ${p => p.theme.fontSizes.m};
        };    
`;

export const BoxButton = styled.div`
    display:flex;
    align-items:center;
    gap: ${p => p.theme.space[1]}px;

    ${mq[0]} {
       gap: ${p => p.theme.space[2]}px;  
    };

    ${mq[1]} {
       gap: ${p => p.theme.space[3]}px;  
    };
`;

export const ContactButton = styled(ButtonStyled)`
    padding-top: ${p => p.theme.space[1]}px;
    padding-bottom: ${p => p.theme.space[1]}px;
    padding-left: ${p => p.theme.space[2]}px;
    padding-right: ${p => p.theme.space[2]}px;

    ${mq[0]} {
        padding-top: ${p => p.theme.space[2]}px;
        padding-bottom: ${p => p.theme.space[2]}px;
        padding-left: ${p => p.theme.space[3]}px;
        padding-right: ${p => p.theme.space[3]}px; 
    };
`;
