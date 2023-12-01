import Head from 'next/head';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucian Prinz</title>
        <meta name="description" content="My portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="relative flex flex-col items-center w-full px-4 sm:px-8 md:px-12 pb-8">
        <Header />
        <About />
        <Experience />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

