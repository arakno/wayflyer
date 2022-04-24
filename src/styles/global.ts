import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif; 
}
#root{
    margin:0 auto;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.App {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  // font-size: calc(10px + 2vmin);
}

.buttons {
  flex-direction: row;
  align-items: center;
  justify-content: center;
}



.buttons:hover + .tooltip {
  display: flex;
}
`

export default GlobalStyle