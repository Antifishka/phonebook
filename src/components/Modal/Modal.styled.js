import styled from '@emotion/styled';

export const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: ${p => p.theme.sizes.mediumWidth};
    min-width: ${p => p.theme.sizes.minWidth};
    padding: ${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.box};
    box-shadow: ${p => p.theme.shadows.box};
    `