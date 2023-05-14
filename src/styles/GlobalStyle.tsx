import { Global, css } from '@emotion/react';

const styles = css`
  * {
    font-family: 'AppleSDGothicNeo', 'Noto Sans', 'sans-serif';
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  a {
    margin: 0;
    background: transparent;
    cursor: pointer;
    padding: 0;
    vertical-align: baseline;
    text-decoration: none;
    color: inherit;
    font-size: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  input {
    outline: none;
    border: none;
    background-color: transparent;
  }

  button {
    margin: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background: inherit;
    cursor: pointer;
    padding: 0;
    overflow: visible;
    :disabled {
      cursor: not-allowed;
    }
  }

  img {
    border: none;
    max-width: 100%;
    vertical-align: middle;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
`;

const GlobalStyle = () => {
  return <Global styles={styles} />;
};

export default GlobalStyle;
