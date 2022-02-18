import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import Link from '@/components/Link';

export default function Footer() {
  return (
    <footer className="flex items-center justify-end gap-3 py-6 border-t sm:gap-4 border-stone-200 dark:border-stone-700">
      <Link href="https://github.com/tronglongphung" title="GitHub">
        <AiFillGithub size={28} />
      </Link>
      <Link href="mailto:tronglongphung@gmail.com" title="email">
        <AiFillMail size={28} />
      </Link>
      <Link href="https://www.linkedin.com/in/tomphung0501/" title="LinkedIn">
        <AiFillLinkedin size={28} />
      </Link>
    </footer>
  );
}
