import ExperienceCard from '../ExperienceCard';
import { GlowCapture, Glow } from '@codaworks/react-glow';

const experiences = [
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
    company: 'Restock World',
    years: 'Dec 2018 - Aug 2021',
    position: 'Co-Founder',
    description:
      'Web dashboard and Discord platform to aid in flipping limited edition software and products such as sneakers for a profit. Sustained a peak of 1,000 MAU and over $40K MRR for over 1 year.',
    image: 'restockworld.png',
    utils: ['node', 'javascript', 'react', 'mongodb', 'stripe', 'discord'],
    twitter: 'https://twitter.com/restockworld'
  },
  {
    company: 'RW Chrome Extension',
    years: 'Mar 2020 - Aug 2021',
    position: 'Founder & Developer',
    description:
      "Chrome extension built into Restock World's existing auth API which automates the process of purchasing products online. Used to successfully purchased over 45,000 products.",
    image: 'rwchrome.png',
    utils: ['javascript', 'html', 'css'],
    private: true
  },
  {
    company: 'Glare Solutions',
    years: 'Feb 2019 - March 2020',
    position: 'Co-Founder',
    description:
      'B2B SaaS providing automated notifications for restocks of items on over 10 ecommerce platforms. Alerts sent via Discord webhooks to a peak of 50 business clients and thousands of users.',
    image: 'glare.png',
    utils: ['node', 'javascript', 'discord'],
    private: true
  },
  {
    company: 'MyGainz',
    years: 'Nov 2023 - Dec 2023',
    position: 'Frontend Developer',
    description:
      'React app for tracking workouts and progress and creating custom routines. Uses Firebase for data persistence and authentication, and Tailwind for styling.',
    image: 'mygainz.png',
    utils: ['react', 'tailwind', 'firebase'],
    github: 'https://github.com/patrickgking03/myGainz'
  }
];

export default function Experience() {
  return (
    <div className="flex flex-col max-w-5xl mt-20">
      <h1
        id="experience"
        className="text-3xl sm:text-4xl text-gray-800 dark:text-gray-200 font-semibold"
      >
        Experience
      </h1>
      <GlowCapture>
        <Glow color="purple" debug={false} className="" style={{}}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {experiences.map(experience => (
              <ExperienceCard key={experience.company} experience={experience} />
            ))}
          </div>
        </Glow>
      </GlowCapture>
    </div>
  );
}

