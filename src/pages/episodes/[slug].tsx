import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from '../../services/api'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString'

import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import { Description, EpisodeLink, ThumbnailContainer } from './slug'
import { usePlayer } from '../../contexts/PlayerContext'

type Episodes = {
  id: string
  title: string
  thumbnail: string
  members: string
  duration: number
  durationAsString: string
  url: string
  publishedAt: string
  description: string
}

type EpisodeProps = {
  episode: Episodes
}

export default function Episode({ episode }: EpisodeProps) {
  const { play } = usePlayer()

  return (
    <EpisodeLink>
      <Head>
        <title>{episode.title} | Podcastr</title>
      </Head>
      <ThumbnailContainer>
        <Link href="/">
          <button type="button">
            <img src="/arrow-left.svg" alt="Voltar" />
          </button>
        </Link>

        <Image width={700} height={160} src={episode.thumbnail} objectFit="cover" />
        <button type="button" onClick={() => play(episode)}>
          <img src="/play.svg" alt="Tocar episódio" />
        </button>
      </ThumbnailContainer>

      <header>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>
      </header>

      <Description dangerouslySetInnerHTML={{ __html: episode.description }} />
    </EpisodeLink>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 2,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const paths = data.map((episode) => {
    return {
      params: {
        slug: episode.id
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params

  const { data } = await api.get(`/episodes/${slug}`)

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', {
      locale: ptBR
    }),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    description: data.description,
    url: data.file.url
  }
  return {
    props: {
      episode
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
