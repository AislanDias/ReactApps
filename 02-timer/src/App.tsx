import { Button } from "./componets/Button";
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="success"/>
      <Button/>
    </ThemeProvider>
  )
}

