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
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #010101;
`;

export const TitlePhonebook = styled.h1`
margin-bottom: 20px;
`;

export const TitleContacts = styled.h2`
margin-bottom: 20px;
`;