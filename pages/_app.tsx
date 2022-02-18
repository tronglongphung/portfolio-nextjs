import '../styles/globals.css';
import Layout from '@/components/Layout/Layout';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
