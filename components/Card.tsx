import TechIcon from '@/components/TechIcon';

export default function Card({ title, description, href, imageSrc, techs }) {
  return (
    <div className="flex flex-col justify-between h-full p-4 transition duration-300 border rounded dark:border-stone-600 dark:hover:border-stone-300 border-stone-200 hover:border-stone-400">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <h3 className="mb-2 font-bold text-stone-800 dark:text-stone-200">{title}</h3>
        <p className="mb-4 text-sm text-stone-600 dark:text-stone-400">{description}</p>
      </a>
      <div>
        <div className="mb-4">
          <TechIcon techs={techs} />
        </div>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt="Company website" className="w-full rounded sm:h-44 dark:brightness-90" />
        </a>
      </div>
    </div>
  );
}
