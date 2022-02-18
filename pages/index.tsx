import Image from 'next/image';
import Head from 'next/head';
import Form from '@/components/Form';
import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/components/Animation';

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
          <motion.section
            variants={fadeInUp}
            className="flex flex-col-reverse items-stretch mb-12 sm:flex-row sm:mb-16"
          >
            <div className="pr-10">
              <h1 className="mb-2 text-3xl font-bold sm:mb-3 sm:text-5xl">Tom Phung</h1>
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

          <motion.section variants={fadeInUp} className="mb-12 sm:mb-16">
            <h3 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">About Me</h3>
            <div className="text-stone-700 dark:text-stone-300">
              <ul>
                <li>Viet live in adelaide</li>
              </ul>
            </div>
          </motion.section>

          <motion.section variants={fadeInUp} className="mb-12 sm:mb-16">
            <h3 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">Skills</h3>
            <div className="text-stone-700 dark:text-stone-300">
              <p className="mb-3">
                These are the skills I have attained throughout the Bootcamp and months of Self-taught:
              </p>
              <ul className="mb-10 list-disc list-outside sm:list-inside">
                <li className="mb-3">
                  <strong>Languages: </strong>JavaScript, TypeScript <span className="italic">(Learning)</span> HTML,
                  CSS, SQL
                </li>
                <li className="mb-3">
                  <strong>Frameworks: </strong>React, Next.js, Express, Node.js
                </li>
                <li className="mb-3">
                  <strong>Databases: </strong>MongoDB, MySQL, PostgreSQL
                </li>
              </ul>

              <div className="flex items-center gap-3">
                <strong>Current favourite stack:</strong>
                <SiNextdotjs size={28} />
                <SiTailwindcss size={28} />
                <SiNodedotjs size={28} />
                <SiTypescript size={28} />
              </div>
            </div>
          </motion.section>

          <motion.section variants={fadeInUp} className="mb-12 sm:mb-16">
            <h3 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">Contact</h3>
            <div className="text-stone-700 dark:text-stone-300">
              <p className="mb-4">You can contact me through the form, or though the socials below</p>
              <Form />
            </div>
          </motion.section>
        </motion.div>
      </motion.div>
    </>
  );
}
