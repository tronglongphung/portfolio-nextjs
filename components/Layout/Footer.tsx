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
        <a href="https://github.com/tronglongphung" aria-label="GitHub">
          <AiFillGithub size={28} />
        </a>
      </Tippy>

      <Tippy content="LinkedIn">
        <a href="https://www.linkedin.com/in/tomphung0501/" aria-label="LinkedIn">
          <AiFillLinkedin size={28} />
        </a>
      </Tippy>
      <div aria-label="Email" id="parent">
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
              <div className="align-middle cursor-pointer">
                <AiFillMail size={28} />
              </div>
            </CopyToClipboard>
          </div>
        </Tippy>
      </div>
    </footer>
  );
}
