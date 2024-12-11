import ProjectCard from '../ProjectCard';
import { GlowCapture, Glow } from '@codaworks/react-glow';

const projects = [
  {
    company: 'Pickfinder',
    years: 'In Progress',
    position: 'Fullstack Developer',
    description:
      "Sports betting research tool supporting over 13 sports and 4 DFS apps.",
    image: 'pickfinder.png',
    utils: ['next', 'typescript', 'tailwind', 'pocketbase'],
    website: 'https://pickfinder.app'
  },
  {
    company: 'Pacman AI Agents',
    years: 'March 2024 - May 2024',
    position: 'Machine Learning Engineer',
    description:
      'Trained AI agents using reinforcement learning to play a 2v2 capture the flag version of Pacman. Utilized approximate Q-learning, feature/reward design, and particle filtering to beat other teams.',
    image: 'ghostbusters.png',
    utils: ['python', 'ai'],
    awards: '1st Place in Tournament',
    private: true
  },
  {
    company: 'Pythscrip',
    years: 'Jan 2024 - May 2024',
    position: 'Developer',
    description:
      'Compiler for a new programming language that combines the best features of Python and JavaScript. Utilizes Ohm for syntax parsing, and then optimizes and compiles the code to JavaScript.',
    image: 'pythscrip.png',
    utils: ['javascript', 'ohm', 'react', 'tailwind'],
    website: 'https://loosh.github.io/pythscrip'
  },
  {
    company: 'RW Chrome Extension',
    years: 'Mar 2020 - Aug 2021',
    position: 'Founder & Developer',
    description:
      "Chrome extension built into Restock World's existing auth API which automates the process of purchasing products online. Used to successfully purchase over 45,000 products.",
    image: 'rwchrome.png',
    utils: ['javascript', 'html', 'css'],
    private: true
  },
  {
    company: 'Plan GPT',
    years: 'Apr 2023 - May 2023',
    position: 'Frontend Developer',
    description:
      "iOS app that generates personalized day-by-day road trip itineraries using OpenAI's GPT-3 API. Uses Apple Map Kit for visualization, and Firebase for data persistence.",
    image: 'plangpt.png',
    utils: ['swift', 'firebase', 'mapkit', 'gpt'],
    github: 'https://github.com/david518yang/PlanGPT'
  },
  {
    company: 'News Aggregator',
    years: 'Apr 2023',
    position: 'Fullstack Developer',
    description:
      'NextJS app which aggregates news from various sources using web scraping and natural language processing and displays them in a clean and concise manner in order to remove biases.',
    image: 'newsaggregator.png',
    awards: 'LMU Hacks 2023 Winner',
    utils: ['next', 'typescript', 'tailwind', 'python'],
    github: 'https://github.com/arikanev/NewsAggregator'
  },
  {
    company: 'MyGainz',
    years: 'Nov 2022 - Dec 2022',
    position: 'Frontend Developer',
    description:
      'React app for tracking workouts and progress and creating custom routines. Uses Firebase for data persistence and authentication, and Tailwind for styling.',
    image: 'mygainz.png',
    utils: ['react', 'tailwind', 'firebase'],
    github: 'https://github.com/patrickgking03/myGainz'
  }
];

export default function Projects() {
  return (
    <div className='flex flex-col max-w-5xl mt-12 gap-4'>
      <h1
        id='projects'
        className='text-3xl sm:text-4xl text-gray-800 dark:text-gray-200 font-semibold'
      >
        Projects
      </h1>
      <GlowCapture>
        <Glow color='purple' debug={false} className='' style={{}}>
          <div className='flex flex-wrap flex-col md:justify-center md:flex-row gap-4'>
            {projects.map(project => (
              <ProjectCard key={project.company} project={project} />
            ))}
          </div>
        </Glow>
      </GlowCapture>
    </div>
  );
}

