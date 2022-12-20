/* eslint @typescript-eslint/no-empty-interface: "off" */

import { DefaultTheme } from './../../node_modules/styled-components/native/dist/dist/models/ThemeProvider.d';
import 'styled-components'

import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}
