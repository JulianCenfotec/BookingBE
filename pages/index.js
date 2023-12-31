import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Header from '../components/header/Header';
import Login from '../components/forms/Login'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <header className="App-header">
          <Login/>
      </header>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
