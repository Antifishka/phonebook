import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize'; 
import styled from '@emotion/styled';

export const GlobalStyles = css`
${emotionNormalize}

* {
    box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${p => p.theme.fontSizes.m};;

  color: ${p => p.theme.colors.mainText};
  background-color: #f4f4f4;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin: 0;
  padding:0;
}

li{
    list-style: none;
}
`;

export const TitlePhonebook = styled.h1`
margin-bottom: ${p => p.theme.space[4]}px;

font-family: ${p => p.theme.fonts.heading};
font-weight: ${p => p.theme.fontWeights.bold};

color: ${p => p.theme.colors.accent};
`;

export const TitleContacts = styled.h2`
margin-bottom: ${p => p.theme.space[4]}px;

font-family: ${p => p.theme.fonts.heading};
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};

color: ${p => p.theme.colors.accent};
`;