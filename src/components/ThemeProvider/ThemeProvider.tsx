import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'src/styled/theme'
import GlobalStyle from 'src/styled/globalStyles'
import { useDarkMode } from 'src/hooks/useDarkMode'

const ThemeProviderComponent: FC = ({ children }) => {
  const [theme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default ThemeProviderComponent
