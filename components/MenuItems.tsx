import Link from 'next/link';

export default function MenuItems() {
  const itemClass =
    'text-zinc-600 text-sm dark:text-zinc-300 dark:hover:text-zinc-500 border-b border-zinc-300/20 dark:border-zinc-700/20 py-2 md:border-0';

  return (
    <>
      <Link className={itemClass} href="/">
        About
      </Link>
      <Link className={itemClass} href="#companies" scroll={false}>
        Experience
      </Link>
      <Link className={itemClass} href="/resume.pdf" rel="noopener noreferrer" target="_blank">
        Resume
      </Link>
    </>
  );
}

