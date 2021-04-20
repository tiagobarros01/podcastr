import React from 'react';

export default function Home(props) {
  return (
    <div>
      <h1>INdex</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3333/episodes');
  const data = await res.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
}
