import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import CopyToClipboard from 'react-copy-to-clipboard';
import { useState } from 'react';

export default function Footer() {
  const [copyStatus, setCopyStatus] = useState('Click the mail logo to copy');

  return (
    <footer className="flex items-center justify-end gap-3 py-6 border-t sm:gap-4 border-stone-200 dark:border-stone-700">
      <Tippy content="GitHub">
        <a href="https://github.com/tronglongphung">
          <AiFillGithub size={28} />
        </a>
      </Tippy>

      <Tippy content="LinkedIn">
        <a href="https://www.linkedin.com/in/tomphung0501/">
          <AiFillLinkedin size={28} />
        </a>
      </Tippy>

      <Tippy
        trigger="mouseenter"
        hideOnClick={false}
        interactive
        content={<span>{copyStatus} tronglongphung@gmail.com</span>}
      >
        <div>
          <CopyToClipboard
            text="tronglongphung@gmail.com"
            onCopy={() => {
              setCopyStatus('Copied to clipboard 🥳');
              setTimeout(() => setCopyStatus('Click the mail logo to copy'), 2000);
            }}
          >
            <button className="align-middle">
              <AiFillMail size={28} />
            </button>
          </CopyToClipboard>
        </div>
      </Tippy>
    </footer>
  );
}
