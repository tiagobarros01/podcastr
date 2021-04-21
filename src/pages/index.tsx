import { GetStaticProps } from 'next';
import React from 'react';

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
  const res = await fetch('http://localhost:3333/episodes');
  const data = await res.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
};
