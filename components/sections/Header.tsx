import MenuItems from '../MenuItems';
import PopoverMenu from '../PopoverMenu';
import { Sun } from 'lucide-react';
import { MoonStarIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Linkedin, Github, Twitter } from 'lucide-react';

export default function Header() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log('ScrollY:', scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <header
      className={`max-w-4xl pt-6 w-full top-0 ${scrollY < 55 ? 'sticky top-0' : 'relative top-5'}`}
      style={{ top: scrollY < 55 ? '0px' : `55px` }}
    >
      <div className="w-full h-12">
        <div className="h-full flex justify-between">
          <div className="flex gap-2">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/lucian-prinz"
              className="grid place-items-center rounded-full h-full px-4 roup ring-1 shadow-lg backdrop-blur bg-white/90 dark:bg-zinc-800/90 dark:text-zinc-200 ring-zinc-900/5 dark:ring-white/10 group-hover:stroke-zinc-600"
            >
              <Linkedin className="stroke-zinc-400 stroke-2 hover:stroke-zinc-600" />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/loosh"
              className="grid place-items-center rounded-full h-full px-4 roup ring-1 shadow-lg backdrop-blur bg-white/90 dark:bg-zinc-800/90 dark:text-zinc-200 ring-zinc-900/5 dark:ring-white/10 group-hover:stroke-zinc-600"
            >
              <Github className="stroke-zinc-400 stroke-2 hover:stroke-zinc-600" />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.twitter.com/impersonated"
              className="grid place-items-center rounded-full h-full px-4 roup ring-1 shadow-lg backdrop-blur bg-white/90 dark:bg-zinc-800/90 dark:text-zinc-200 ring-zinc-900/5 dark:ring-white/10 group-hover:stroke-zinc-600"
            >
              <Twitter className="stroke-zinc-400 stroke-2 hover:stroke-zinc-600" />
            </Link>
          </div>
          <ul className="hidden h-full md:flex text-sm justify-evenly items-center shadow-lg backdrop-blur font-mediumfont-sans gap-8 rounded-full px-6 ring-1 bg-white/90 dark:bg-zinc-800/90 dark:text-zinc-200 ring-zinc-900/5 dark:ring-white/10">
            <MenuItems />
          </ul>
          <div className="flex items-center gap-4 h-full ">
            <div className="md:hidden h-full">
              <PopoverMenu />
            </div>
            <button
              onClick={() => {
                setTheme(currentTheme === 'dark' ? 'light' : 'dark');
                console.log(currentTheme);
              }}
              className="rounded-full h-full px-5 group ring-1 shadow-lg backdrop-blur bg-white/90 dark:bg-zinc-800/90 dark:text-zinc-200 ring-zinc-900/5 dark:ring-white/10"
            >
              {mounted &&
                (currentTheme == 'light' ? (
                  <Sun size={21} className="stroke-zinc-400 stroke-2 group-hover:stroke-zinc-600" />
                ) : (
                  <MoonStarIcon
                    size={21}
                    className="stroke-zinc-400 stroke-2 group-hover:stroke-zinc-600"
                  />
                ))}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

