import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Moon, Sun, User } from 'react-feather';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <div className="w-full">
      <div className="w-full flex mx-auto items-center justify-between flex-wrap py-3 px-5 md:py-4 md:px-20 shadow dark:shadow-gray-300">
        <Link href="/">
          <a className="text-xl font-bold cursor-pointer">NIFTY</a>
        </Link>
        <div className="flex-1 hidden md:flex justify-center">
          <Link href="/people">
            <a
              className={`${
                asPath === '/people'
                  ? 'bg-blue-50 text-blue-200'
                  : 'text-gray-600 dark:text-gray-200'
              } mx-3 flex items-center py-3 px-5 rounded-md`}
            >
              <User
                size={18}
                strokeWidth={2}
                className="mr-2"
                color={asPath === '/people' ? '#4977f9' : '#4B5563'}
              />
              People
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="mr-3">
            {theme === 'dark' ? (
              <button
                className="p-2 rounded-full btn-transition"
                onClick={() => setTheme('light')}
              >
                <Sun />
              </button>
            ) : (
              <button
                className="p-2 rounded-full btn-transition"
                onClick={() => setTheme('dark')}
              >
                <Moon />
              </button>
            )}
          </div>

          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
