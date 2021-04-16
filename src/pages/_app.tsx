import React from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'

import GlobalStyle from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
      {router.pathname !== '/404' && router.pathname !== '/contato' && (
        <Footer />
      )}
    </ThemeProvider>
  )
}

export default MyApp
