import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import BOOKS_QUERY from '../graphql/books.query';

const Home = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(BOOKS_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {data.books.map(job => {
          return <li key={`job__${job.id}`}>{job.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;