import { Header } from '../components/Header'
import { Player } from '../components/Player'
import { PlayerContextProvider } from '../contexts/PlayerContext'
import { AppContainer, MainContainer } from '../styles/app'

import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <AppContainer>
        <GlobalStyle />
        <MainContainer>
          <Header />
          <Component {...pageProps} />
        </MainContainer>
        <Player></Player>
      </AppContainer>
    </PlayerContextProvider>
  )
}

export default MyApp
