import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse items-stretch sm:flex-row">
        <div className="flex-grow pr-8">
          <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Tom Phung</h1>
          <h2 className="mb-16">Fullstack Developer, Uni Student @UniSA</h2>
        </div>
        <div className="w-[100px] sm:w-[140px] mb-3 sm:mb-0 mr-auto">
          <Image
            src={'/profile.webp'}
            alt="Tom Phung"
            width={130}
            height={132}
            className="rounded-xl sm:rounded-full"
          />
        </div>
      </div>
    </>
  );
}
