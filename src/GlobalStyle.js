import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
  --background: #ececec;
  --text: #2a2a2a;
  --text-button: #fffffe;
  --background-button: #7f5af0;
  --title: #fffffe;
}
body {
  margin: 0;
  font-family: 'Rubik',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--background);
  color: var(--text);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  border: 0;
  color: var(--text-button);
  background: var(--background-button);
  border-radius: .25rem;
  cursor: pointer;
  padding: 1rem 2rem;

}

`

export default GlobalStyle