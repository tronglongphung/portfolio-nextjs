import { useState, useRef } from 'react';
import emailjs, { init } from '@emailjs/browser';

export default function Form() {
  init('user_0o02igSqAdLjF5DJV3nEj');

  const [sendForm, setSendForm] = useState('Send');
  const [formState, setFormState] = useState({ email: '', content: '', name: '' });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_19hzcfn', 'template_4220xgb', form.current).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    setSendForm('🥳 Sent! I will reply shortly.');
    setTimeout(() => setSendForm('Send'), 2000);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <form
        className="border-2 rounded dark:bg-slate-800 bg-stone-100 border-stone-100 dark:border-slate-800 "
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="grid grid-cols-6 gap-4 px-4 py-5 sm:p-6">
          <div className="col-span-3">
            <label htmlFor="name" className="block pb-1 text-sm">
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              autoComplete="name"
              className="w-full rounded text-stone-900 "
            />
          </div>

          <div className="col-span-3">
            <label htmlFor="email" className="block pb-1 text-sm">
              Email
            </label>
            <input
              required
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              autoComplete="email"
              className="w-full rounded text-stone-900 "
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="content" className="block pb-1 text-sm">
              Content
            </label>
            <div className="mt-1">
              <textarea
                id="content"
                name="content"
                onChange={handleChange}
                rows={3}
                className="w-full rounded text-stone-900"
                defaultValue={''}
              />
            </div>
          </div>
          <button
            type="submit"
            className="col-span-6 py-3 mt-1 text-sm font-semibold rounded bg-emerald-200 dark:bg-slate-500 text-stone-900 dark:text-stone-100 "
          >
            {sendForm}
          </button>
        </div>
      </form>
    </>
  );
}
