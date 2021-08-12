import { useState } from 'react'
import { Header } from '../components/Header'
import { Player } from '../components/Player'
import { PlayerContext } from '../contexts/PlayerContext'

import { AppContainer, MainContainer } from '../styles/app'

import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  function play(episode) {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state)
  }

  return (
    <>
      <PlayerContext.Provider
        value={{
          episodeList,
          currentEpisodeIndex,
          play,
          isPlaying,
          togglePlay,
          setPlayingState
        }}
      >
        <AppContainer>
          <GlobalStyle />
          <MainContainer>
            <Header />
            <Component {...pageProps} />
          </MainContainer>
          <Player></Player>
        </AppContainer>
      </PlayerContext.Provider>
    </>
  )
}

export default MyApp
