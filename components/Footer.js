import { useCallback, useEffect, useState } from 'react';
import ArrowIcon from './ArrowIcon';

const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    fill="none"
    viewBox="0 0 25 24"
    className="dark:opacity-50"
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      clipPath="url(#clip0_192_823)"
    >
      <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42"></path>
    </g>
    <defs>
      <clipPath id="clip0_192_823">
        <path
          className="fill-current text-white"
          d="M0 0H24V24H0z"
          transform="translate(.5)"
        ></path>
      </clipPath>
    </defs>
  </svg>
);

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    fill="none"
    viewBox="0 0 21 20"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="stroke-current text-gray-400 dark:text-white"
      d="M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z"
    ></path>
  </svg>
);

const ThemeSwitcher = () => {
  return (
    <div className="theme-switcher-style flex mt-6 bg-white justify-center dark:bg-gray-900 rounded-3xl p-1">
      <button
        type="button"
        aria-label="Use Light Mode"
        onClick={() => {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }}
        className="flex items-center h-full pr-2 bg-primary dark:bg-transparent rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
      >
        {sunIcon}
      </button>
      <button
        type="button"
        aria-label="Use Dark Mode"
        onClick={() => {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }}
        className="flex items-center h-full pr-2 dark:bg-primary rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
      >
        {moonIcon}
      </button>
    </div>
  );
};

export default function Footer({ copyrightText }) {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleWindowScroll = useCallback(() => {
    if (window.scrollY > 1000) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  const handleScrollToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-16 flex flex-col items-center">
      <p className="dark:text-white mb-3 font-bold opacity-60">
        {/* {copyrightText} */}
        More about me is{' '}
        <a
          href="https://shokirov.uz"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          here
        </a>
      </p>
      <ThemeSwitcher />
      {showScrollToTop && (
        <div className="scroll-to-top" onClick={handleScrollToTopClick}>
          <ArrowIcon className="scroll-to-top__icon" />
        </div>
      )}
    </footer>
  );
}
