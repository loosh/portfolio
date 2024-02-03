import SkillCard from '../SkillCard';

const skills = [
  {
    label: 'Next.js',
    icon: 'next',
    description: 'My go-to framework for full stack applications. Used for this website too!'
  },
  {
    label: 'React',
    icon: 'react',
    description: 'Used for many of my projects before Next.js was a thing. Still use it sometimes'
  },
  {
    label: 'Tailwind CSS',
    icon: 'tailwind',
    description: 'I pretty much use this exclusively for styling instead of regular CSS classes'
  },
  {
    label: 'SvelteKit',
    icon: 'svelte',
    description:
      'Experimented and built some smaller projects with it. I like it but I prefer Next.js for now'
  },
  {
    label: 'Node.js',
    icon: 'node',
    description:
      'My go-to backend framework. Typically use this with Express.js, React, and MongoDB'
  },
  {
    label: 'JavaScript',
    icon: 'javascript',
    description:
      'The first programming language I learned. Serves as the backbone for many of my projects'
  },
  {
    label: 'TypeScript',
    icon: 'typescript',
    description:
      "My go-to programming language, as it's like JavaScript but better. Use it with Next.js"
  },
  {
    label: 'Pocketbase',
    icon: 'pocketbase',
    description: 'Recently started using for small projects. Super convenient and easy to stetup'
  },
  {
    label: 'Python',
    icon: 'python',
    description: 'Use for machine learning and data science projects, and other small scripts'
  },
  {
    label: 'Java',
    icon: 'java',
    description: 'Mainly use for school projects and learning data structures and algorithms'
  },
  {
    label: 'Swift',
    icon: 'swift',
    description:
      'My go-to for iOS development. Used for my app PlanGPT and some other smaller projects'
  },
  {
    label: 'Firebase',
    icon: 'firebase',
    description: 'Easy to use and deploy backend for small projects. Used for PlanGPT'
  },
  {
    label: 'MongoDB',
    icon: 'mongodb',
    description:
      'Used for many of my projects. I like it because it is easy to use and deploy with Node.js'
  },
  {
    label: 'Postgresql',
    icon: 'postgres',
    description: 'Used for some small projects'
  },
  {
    label: 'Docker',
    icon: 'docker',
    description:
      'Use when working with a team on a large existing codebase. Makes deployment easier'
  },
  {
    label: 'HTML',
    icon: 'html',
    description: 'Useful for web development (obviously). I mainly use it in JSX for React projects'
  },
  {
    label: 'CSS',
    icon: 'css',
    description:
      "Use Tailwind CSS most of the time, but I know regular CSS too, as it's essential for Tailwind"
  }
];

export default function Skills() {
  return (
    <div className='flex flex-col max-w-6xl mt-20 mb-20 w-full gap-16'>
      <h1
        id='skills'
        className='ml-auto mr-auto text-3xl sm:text-4xl text-gray-800 dark:text-gray-200 font-semibold'
      >
        Tools I Use
      </h1>
      <div className='flex flex-wrap flex-col sm:justify-center sm:flex-row gap-x-6 gap-y-8'>
        {skills.map(skill => (
          <SkillCard skill={skill} key={skill.label} />
        ))}
      </div>
    </div>
  );
}

