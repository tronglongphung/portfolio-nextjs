import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/components/Animation';

export default function Work() {
  return (
    <>
      <Head>
        <title>Tom Phung - Developer, Gamer</title>
      </Head>
      <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Work</h1>
    </>
  );
}
