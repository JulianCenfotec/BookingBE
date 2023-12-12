import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import Header from '../components/header/Header';
import Login from '../components/forms/Login';


const FormsPage = () => {
  return (
        <Layout home>
      <header className="App-header">
          
      <Header/>
      </header>
    </Layout>
  );
};

export default FormsPage;

