import { Header } from '../components/Header'
import { Player } from '../components/Player'

import { AppContainer, MainContainer } from '../styles/app'

import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppContainer>
        <GlobalStyle />
        <MainContainer>
          <Header />
          <Component {...pageProps} />
        </MainContainer>
        <Player></Player>
      </AppContainer>
    </>
  )
}

export default MyApp
