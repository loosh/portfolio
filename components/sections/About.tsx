export default function About() {
  return (
    <div id="about" className="flex-auto flex flex-col gap-4 max-w-4xl mt-24">
      <h1 className="text-4xl md:text-5xl text-gray-800 dark:text-gray-200 font-semibold">
        Hey, {"I'm"} Lucian
      </h1>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed">
        Software engineer and entrepreneur with a passion for building and designing things that
        live on the internet. {"I've"} been writing software for over <b>3 years</b>, and have
        worked on a wide range of projects such as web apps, browser extensions, scalable backends,
        and more. Currently studying computer science at Loyola Marymount University
      </p>
    </div>
  );
}

