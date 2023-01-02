import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import siteMetadata from '../data/siteMetadata';

const MarketplaceWithFilter = dynamic(
  () => import('../components/marketplace/MarketplaceWithFilter'),
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{siteMetadata.siteName} | Home</title>
      </Head>
      <div className="">
        <MarketplaceWithFilter />
      </div>
    </>
  );
};

export default Home;
