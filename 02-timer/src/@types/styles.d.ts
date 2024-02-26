import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// Creating a type from a infered typescript object
type ThemeType = typeof defaultTheme

// We are overwriting some styled-components types ts declarations from this file
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
