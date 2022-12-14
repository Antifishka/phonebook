import styled from '@emotion/styled';

export const ContactText = styled.p`
    display: flex;
    align-items: center;;
    gap: ${p => p.theme.space[2]}px;
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[0]}px;
    padding-right: ${p => p.theme.space[0]}px;
`

export const ContactPhone = styled.p`
    display: flex;
    align-items: center;;
    gap: ${p => p.theme.space[2]}px;
    min-width: 220px;
    text-align: left;
`