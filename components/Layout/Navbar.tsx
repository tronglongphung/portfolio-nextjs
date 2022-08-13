import Link from '@/components/Link';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'About Me', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Resume', href: '/resume.pdf' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="flex items-center justify-between gap-2 pt-4 pb-8 text-sm sm:pb-14 sm:pt-8 sm:text-base">
      <div className="flex gap-2">
        {navigation.map(({ name, href }, index) => (
          <Link
            href={href}
            key={index}
            className={classNames(
              href === router.asPath ? 'dark:bg-stone-700 bg-stone-100' : 'dark:hover:bg-stone-700 hover:bg-stone-100',
              'px-2 py-1 rounded-md transition duration-300'
            )}
            target={name === 'Resume' ? '_blank' : undefined}
            rel={name === 'Resume' ? 'noopener noreferrer' : undefined}
          >
            {name}
          </Link>
        ))}
      </div>
      <div
        className="flex items-center justify-center p-2 ml-1 transition-all duration-300 rounded-lg bg-stone-100 ring-stone-400 dark:bg-stone-800 hover:ring-2"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
      </div>
    </nav>
  );
}
