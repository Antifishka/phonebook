import styled from '@emotion/styled';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${p => p.theme.space[4]}px;

    min-width: ${p => p.theme.sizes.minWidth};
    max-width: ${p => p.theme.sizes.maxWidth};
    border: ${p => p.theme.borders.button};
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.boxShadow};
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
    margin-left: auto;
    margin-right: auto;

    background-color: #fff;
`;
