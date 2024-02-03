interface Skill {
  label: string;
  icon: string;
  description: string;
}

import Icon from '@/components/ui/icon';

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className='flex flex-col gap-4 w-full sm:w-[calc(50%_-_2rem)] lg:w-[calc(33.33%_-_2rem)]'>
      <div className='flex rounded-xl  text-white gap-4 items-center'>
        <Icon name={skill.icon} size={36} />
        <h1 className='text-stone-800 dark:text-stone-200 text-lg font-medium'>{skill.label}</h1>
      </div>
      <h2 className=' text-gray-600 dark:text-gray-500 text-sm'>{skill.description}</h2>
    </div>
  );
}

