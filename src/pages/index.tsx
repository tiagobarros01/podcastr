import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { GetStaticProps } from 'next';
import React from 'react';

import { api } from '../services/api';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

interface Episode {
  id: string;
  title: string;
  members: string;
}
interface HomeProps {
  episodes: Episode[];
}

export default function Home({ episodes }: HomeProps) {
  return (
    <div>
      <h1>INdex</h1>
      <p>{JSON.stringify(episodes)}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes?', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc',
    },
  });

  const episodes = data.map((episode) => ({
    id: episode.id,
    title: episode.title,
    thumbnail: episode.thumbnail,
    members: episode.members,
    publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
    duration: Number(episode.file.duration),
    durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
    description: episode.description,
    url: episode.file.url,
  }));

  return {
    props: {
      episodes,
    },
    revalidate: 60 * 60 * 8,
  };
};
