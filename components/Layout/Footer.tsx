import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function Footer() {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="container flex items-center gap-2 py-6 border-t border-stone-200 text-stone-800 dark:text-stone-200">
      <div>Theme:</div>
      <button
        className="p-2 rounded-md ring-1 ring-gray-400"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
      </button>
    </footer>
  );
}
