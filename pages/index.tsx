/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Head from 'next/head';
import Form from '@/components/Form';
import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiTypescript } from 'react-icons/si';
import { Container, Stagger, FadeSection } from '@/components/Animation';
import styles from '../styles/index.module.css';
import Tippy from '@tippyjs/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tom Phung - Developer, Gamer</title>
        <meta
          name="description"
          content="I build React / Next.js Applications as a hobby while having Uni Studies. Regularly keeping up with the
                latest technologies and technologies I use."
        />
      </Head>
      <Container>
        <Stagger>
          {/* Heading */}
          <FadeSection className="flex flex-col-reverse items-stretch mb-12 sm:flex-row sm:mb-16">
            <div className="sm:pr-10">
              <h1 className={styles.h1}>Tom Phung</h1>
              <h2 className="mb-6">Fullstack Developer, Uni Student @UniSA</h2>
              <p className=" text-stone-600 dark:text-stone-300">
                I build React / Next.js applications as a hobby during Uni Studies. Regularly keeping up with the latest
                technologies that could be beneficial in the future.
              </p>
            </div>

            <div className="w-[115px] sm:w-[140px] relative mb-3 sm:mb-0 mr-auto flex-shrink-0 dark:grayscale">
              <Image
                src={'/profile.webp'}
                alt="Tom Phung"
                width={280}
                height={284}
                className="rounded-2xl sm:rounded-full"
              />
            </div>
          </FadeSection>

          {/* About Me */}
          <FadeSection className={styles.section}>
            <h3 className={styles.h3}>About Me</h3>
            <div className="text-stone-700 dark:text-stone-200">
              <p className={styles.section_p}>
                <strong>Location: </strong>🏡 Adelaide, Australia
              </p>
              <p className={styles.section_p}>
                <strong>Hobbies: </strong>🏌️‍♂️ Golfing, 💪🏼 Gyming, 🕹 Gaming (Triple G's LOL)
              </p>
              <p className={styles.section_p}>
                <strong>Education: </strong>📚 B.Bus (Management) @UniSA, 🧑🏻‍💻 Coding Bootcamp @UofA
              </p>
            </div>
          </FadeSection>

          {/* Skills */}
          <FadeSection className={styles.section}>
            <h3 className={styles.h3}>Skills</h3>
            <div className="text-stone-700 dark:text-stone-200">
              <p className={styles.section_p}>
                These are the skills I have attained throughout the Bootcamp and months of Self-learning:
              </p>
              <div className="mb-8 sm:mb-10">
                <p className={styles.section_p}>
                  <strong>Languages: </strong>JavaScript, TypeScript <span className="italic">(Learning)</span>, HTML,
                  CSS, SQL
                </p>
                <p className={styles.section_p}>
                  <strong>Frameworks: </strong>React, Next.js, Express, Node.js
                </p>
                <p className={styles.section_p}>
                  <strong>Databases: </strong>MongoDB, MySQL, PostgreSQL
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-semibold">Current favourite stack:</span>
                <Tippy content={<p>Next.js</p>}>
                  <div>
                    <SiNextdotjs size={25} />
                  </div>
                </Tippy>
                <Tippy content={<p>Tailwind CSS</p>}>
                  <div>
                    <SiTailwindcss size={25} />
                  </div>
                </Tippy>
                <Tippy content={<p>Node.js</p>}>
                  <div>
                    <SiNodedotjs size={25} />
                  </div>
                </Tippy>
                <Tippy content={<p>TypeScript</p>}>
                  <div>
                    <SiTypescript size={25} />
                  </div>
                </Tippy>
              </div>
            </div>
          </FadeSection>

          {/* Contact */}
          <FadeSection className={styles.section}>
            <h3 className={styles.h3}>Contact</h3>
            <div className="text-stone-700 dark:text-stone-200">
              <p className={styles.section_p}>You can contact me using the form, or though the socials below</p>
              <Form />
            </div>
          </FadeSection>
        </Stagger>
      </Container>
    </>
  );
}
