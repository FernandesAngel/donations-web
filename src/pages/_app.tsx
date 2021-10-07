import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import AppProvider from '../hooks'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default MyApp
