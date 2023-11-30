import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full max-w-4xl mx-auto ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-600 sm:mb-0 dark:text-gray-400">
            <li>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/lucian-prinz"
                className="me-4 md:me-6 hover:brightness-150"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="resume.pdf"
                className="me-4 md:me-6 hover:brightness-150"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/loosh"
                className="me-4 md:me-6 hover:brightness-150"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/impersonated"
                className="me-4 md:me-6 hover:brightness-150"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-lg text-gray-500 sm:text-center dark:text-gray-400">
          Lucian Prinz
        </span>
      </div>
    </footer>
  );
}

