import Link from '@/components/Link';

const navigation = [
  // { name: 'Giới Thiệu', href: '/about-us' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return <nav className="container dark:text-stone-200">add navigation here</nav>;
}
