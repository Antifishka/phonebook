import styled from '@emotion/styled';

export const Contacts = styled.ul`
    position: relative;
    min-width: ${p => p.theme.sizes.minWidth};
    max-width: ${p => p.theme.sizes.maxWidth};
    margin-left: auto;
    margin-right: auto;
    background-color: ${p => p.theme.colors.white};
    padding: ${p => p.theme.space[4]}px;
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    border-radius: ${p => p.theme.radii.box};
    box-shadow: ${p => p.theme.shadows.box};

    text-align: center;
`;

export const ContactItem = styled.li`
    width: 100%;
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[0]}px;
    padding-right: ${p => p.theme.space[0]}px;
    
    font-size: ${p => p.theme.fontSizes.m};

    transform: scale(1);
    transition: ${p => p.theme.transition.main};

    :not(:first-of-type){
       border-top: ${p => p.theme.borders.normal}; 
    }

    :hover,
    :focus{
        position: absolute;
        transform: scale(1.02);
        width: 100%;
        right: 0;
        z-index: 2;
        padding: ${p => p.theme.space[4]}px;
        
        border-top: ${p => p.theme.borders.none}; 
        border-radius: ${p => p.theme.radii.box};
        box-shadow: ${p => p.theme.shadows.box};

        background-color: ${p => p.theme.colors.white};
    } 
`;