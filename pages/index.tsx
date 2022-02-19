/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Head from 'next/head';
import Form from '@/components/Form';
import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/components/Animation';
import styles from '../styles/index.module.css';

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
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={stagger}>
          {/* Heading */}
          <motion.section
            variants={fadeInUp}
            className="flex flex-col-reverse items-stretch mb-12 sm:flex-row sm:mb-16"
          >
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
          </motion.section>

          {/* About Me */}
          <motion.section variants={fadeInUp} className={styles.section}>
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
          </motion.section>

          {/* Skills */}
          <motion.section variants={fadeInUp} className={styles.section}>
            <h3 className={styles.h3}>Skills</h3>
            <div className="text-stone-700 dark:text-stone-200">
              <p className={styles.section_p}>
                These are the skills I have attained throughout the Bootcamp and months of Self-learning:
              </p>
              <div className="mb-10">
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
                <SiNextdotjs size={28} />
                <SiTailwindcss size={28} />
                <SiNodedotjs size={28} />
                <SiTypescript size={28} />
              </div>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section variants={fadeInUp} className={styles.section}>
            <h3 className={styles.h3}>Contact</h3>
            <div className="text-stone-700 dark:text-stone-200">
              <p className={styles.section_p}>You can contact me using the form, or though the socials below</p>
              <Form />
            </div>
          </motion.section>
        </motion.div>
      </motion.div>
    </>
  );
}
