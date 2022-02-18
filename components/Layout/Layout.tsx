import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <main className="container max-w-3xl px-8 text-stone-900 dark:text-stone-200">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
