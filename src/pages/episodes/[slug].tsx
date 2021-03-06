import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { usePlayer } from '../../contexts/PlayerContext';
import { api } from '../../services/api';
import { EpisodeContainer, ThumbnailContainer, Description } from '../../styles/pages/episode';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

interface UnitEpisodeProps {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  publishedAt: string;
  duration: number;
  durationAsString: string;
  url: string;
  description: string;
}

interface EpisodeProps {
  episode: UnitEpisodeProps;
}

export default function Episode({ episode }: EpisodeProps) {
  const { play } = usePlayer();

  const {
    title,
    thumbnail,
    members,
    publishedAt,
    durationAsString,
    description,
  } = episode;

  return (
    <EpisodeContainer>
      <Head>
        <title>
          {title}
          | Podcastr
        </title>
      </Head>
      <ThumbnailContainer>
        <Link href="/">
          <button type="button">
            <img src="/arrow-left.svg" alt="Back" />
          </button>
        </Link>
        <Image width={700} height={160} src={thumbnail} objectFit="cover" />
        <button type="button" onClick={() => play(episode)}>
          <img src="/play.svg" alt="Play episode" />
        </button>
      </ThumbnailContainer>
      <header>
        <h1>{title}</h1>
        <span>{members}</span>
        <span>{publishedAt}</span>
        <span>{durationAsString}</span>
      </header>

      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </EpisodeContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 2,
      _sort: 'published_at',
      _order: 'desc',
    },
  });

  const paths = data.map((episode) => ({
    params: {
      slug: episode.id,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const { data } = await api.get(`/episodes/${slug}`);

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', {
      locale: ptBR,
    }),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(
      Number(data.file.duration),
    ),
    description: data.description,
    url: data.file.url,
  };

  return {
    props: {
      episode,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
