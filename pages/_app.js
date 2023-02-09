import Layout from '@/comps/Layout';
import '@/styles/globals.css'
import React from 'react';

export default function MyApp({Component, pageProps}) {
  return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
  );
}