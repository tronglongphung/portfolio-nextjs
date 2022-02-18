import Link from '@/components/Link';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Resume', href: 'https://drive.google.com/file/d/1t4U9ufsTSVFp2OE274Z8Ya614gXU9hUS/view?usp=sharing' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  return (
    <nav className="flex items-center justify-center gap-2 pt-4 pb-8 text-sm sm:pb-12 sm:pt-8 sm:text-base">
      {navigation.map(({ name, href }, index) => (
        <Link
          href={href}
          key={index}
          className={classNames(
            href === router.asPath
              ? 'dark:bg-stone-700 hover:bg-stone-100'
              : 'dark:hover:bg-stone-700 hover:bg-stone-100',
            'px-2 py-1 rounded-md '
          )}
          target={name === 'Resume' ? '_blank' : undefined}
          rel={name === 'Resume' ? 'noopener noreferrer' : undefined}
        >
          {name}
        </Link>
      ))}
      <button
        className="flex items-center justify-center p-2 ml-1 transition-all rounded-lg 0 bg-stone-100 ring-stone-400 dark:bg-stone-800 hover:ring-2"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
      </button>
    </nav>
  );
}
