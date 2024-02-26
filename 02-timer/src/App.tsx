import { Button } from "./componets/Button";
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {

  // We can use ThemeProvider as a way to switch between light and dark themes
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="success"/>
      <Button/>

      <GlobalStyle />
    </ThemeProvider>
  )
}

