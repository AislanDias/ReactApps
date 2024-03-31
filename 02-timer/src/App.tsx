// import { ThemeProvider } from 'styled-components'
// import { BrowserRouter } from 'react-router-dom'
// import { Router } from './Router'
//
// import { defaultTheme } from './styles/themes/default'
// import { GlobalStyle } from './styles/global'
import { Home } from './Home'

export function App() {
  // We can use ThemeProvider as a way to switch between light and dark themes
  return <Home />
  // return (
  //   <ThemeProvider theme={defaultTheme}>
  //     <BrowserRouter>
  //       <Router />
  //     </BrowserRouter>
  //     <GlobalStyle />
  //   </ThemeProvider>
  // )
}
