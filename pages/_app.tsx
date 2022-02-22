import '../styles/globals.css';
import Layout from '@/components/Layout/Layout';
import { ThemeProvider } from 'next-themes';

// need to update next-themes to remove script error
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
