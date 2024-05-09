import ProjectCard from '../ProjectCard';
import { GlowCapture, Glow } from '@codaworks/react-glow';

const companies = [
  {
    company: 'Restock World',
    years: 'Dec 2018 - Aug 2021',
    position: 'Co-Founder & Developer',
    description:
      'Web dashboard and Discord platform to aid in flipping limited edition software and products such as sneakers and bots. Sustained a peak of 1,000 MAU and over $40K MRR for over 2 years. Wrote software to automate tasks and monitor websites for restocks, as well as maintaining our custom built frontend and backend infrastructure.',
    image: 'restockworld.png',
    utils: ['node', 'javascript', 'react', 'mongodb', 'stripe', 'discord'],
    twitter: 'https://twitter.com/restockworld'
  },
  {
    company: 'Glare Solutions',
    years: 'Feb 2019 - March 2020',
    position: 'Co-Founder',
    description:
      'Co-founded a B2B SaaS providing automated notifications for restocks of items on over 10 ecommerce platforms. Alerts sent via Discord webhooks to a peak of 50 business clients and thousands of users with a peak of around $30K MRR. Coordinated with clients and our team to ensure uptime and reliability.',
    image: 'glare.png',
    utils: ['node', 'javascript', 'discord'],
    private: true
  }
];

export default function Companies() {
  return (
    <div className='flex flex-col max-w-5xl mt-20 gap-4'>
      <h1
        id='companies'
        className='text-3xl sm:text-4xl text-gray-800 dark:text-gray-200 font-semibold'
      >
       Previous Companies
      </h1>
      <GlowCapture>
        <Glow color='purple' debug={false} className='' style={{}}>
          <div className='flex flex-wrap flex-col md:justify-center md:flex-row gap-4'>
            {companies.map(company => (
              <ProjectCard key={company.company} project={company} />
            ))}
          </div>
        </Glow>
      </GlowCapture>
    </div>
  );
}

