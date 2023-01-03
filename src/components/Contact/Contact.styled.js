import styled from '@emotion/styled';

export const Avatar = styled.img`
    border-radius: 50%;
    overflow: hidden;
    background-color: #f4f4f4;
    width: 50px;
`;

export const Name = styled.p`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.space[2]}px;
`;

export const Phone = styled.p`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.space[2]}px;
`;
