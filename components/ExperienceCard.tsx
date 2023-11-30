import Image from 'next/image';
import Icon from '@/components/ui/icon';
import Link from 'next/link';
import { Trophy } from 'lucide-react';
import { FaGithub, FaTwitter, FaLock } from 'react-icons/fa';

interface Experience {
  company: string;
  years: string;
  position: string;
  description: string;
  image: string;
  awards?: string;
  utils: string[];
  github?: string;
  twitter?: string;
  private?: boolean;
}

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="flex flex-col rounded-xl border-[0.75px] border-zinc-900/5 dark:border-white/10 text-white p-4 bg-white/90 dark:bg-zinc-900 glow:border-zinc-200 dark:glow:bg-zinc-800 dark:glow:border-zinc-500 w-full">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-xl text-zinc-700 dark:text-zinc-100">
          {experience.company}
        </h3>
        <h5 className="text-sm text-zinc-500 dark:text-zinc-600">{experience.years}</h5>
      </div>
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-zinc-500 text-sm dark:text-zinc-500">{experience.position}</h4>
        {experience.awards && (
          <div className="flex gap-2 items-center">
            <Trophy className="stroke-amber-400 h-4" width={14} />
            <h5 className="text-sm text-amber-400">{experience.awards}</h5>
          </div>
        )}
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2">{experience.description}</p>
      <div className="flex justify-between items-center mb-3 relative pointer-events-none">
        <div className="flex flex-wrap gap-2">
          {experience.utils.map(util => (
            <Icon key={util} size={30} name={util} />
          ))}
        </div>
        {experience.github && (
          <div className="flex items-center gap-2 pointer-events-auto">
            <FaGithub className="fill-blue-500 text-lg" />
            <Link
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-400 text-sm"
              href={experience.github}
            >
              View Source Code
            </Link>
          </div>
        )}
        {experience.twitter && (
          <div className="flex items-center gap-2 pointer-events-auto">
            <FaTwitter className="fill-blue-500 text-lg" />
            <Link
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-400 text-sm"
              href={experience.twitter}
            >
              Twitter
            </Link>
          </div>
        )}
        {experience.private && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FaLock className="fill-gray-500 text-sm" />
            <p>Private Repo</p>
          </div>
        )}
      </div>
      <Image
        src={`/${experience.image}`}
        className="rounded-md pointer-events-none aspect-video"
        width={1920}
        height={1080}
        placeholder="blur"
        alt={(experience.company, 'Logo')}
      />
    </div>
  );
}

