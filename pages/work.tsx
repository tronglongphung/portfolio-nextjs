import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/components/Animation';

export default function Work() {
  return (
    <>
      <Head>
        <title>Tom Phung - Work</title>
        <meta name="description" content="Here are some of the projects I've worked on." />
      </Head>

      <motion.div variants={stagger}>
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Work</h1>
      </motion.div>
    </>
  );
}
