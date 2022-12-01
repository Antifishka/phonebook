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
  font-size: 16px;

  color: #2f2f37;
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

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
  text-align: center;
`;

export const TitlePhonebook = styled.h1`
margin-bottom: 16px;
`;

export const TitleContacts = styled.h2`
margin-bottom: 16px;
`;