import Head from 'next/head';
import { Container, Stagger, FadeSection } from '@/components/Animation';
import Card from '@/components/Card';
import styles from '../styles/work.module.css';

export default function Work() {
  return (
    <>
      <Head>
        <title>Tom Phung - Work</title>
        <meta name="description" content="Here are some of the projects I've worked on." />
      </Head>
      <Container>
        <Stagger>
          <FadeSection className={styles.section}>
            <div>
              <h1 className={styles.h1}>Work</h1>
              <p className={styles.section_p}>These are the most notable projects I have done throughout the years:</p>
              <Stagger className="grid gap-6 sm:grid-cols-2 ">
                {workData.map((work, index) => (
                  <FadeSection key={index}>
                    <Card {...work} />
                  </FadeSection>
                ))}
              </Stagger>
            </div>
          </FadeSection>
        </Stagger>
      </Container>
    </>
  );
}

const workData = [
  {
    title: 'Company Website',
    description: 'An SEO friendly company website that uses a headless CMS to write blogs and manage contents',
    href: 'https://ndt-vn.com',
    imageSrc: '/work/company.webp',
    techs: ['nextjs', 'typescript', 'nodejs', 'tailwindcss'],
  },
  {
    title: 'Manga Scraper',
    description: 'Using a backend to scrape manga from other websites and store them in a database',
    href: 'https://manga-reader-app.netlify.app/',
    imageSrc: '/work/manga_scraper.webp',
    techs: ['react', 'nodejs', 'tailwindcss', 'redux'],
  },
];
