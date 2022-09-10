import React, { useState } from 'react';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Moon, Search, Sun } from 'react-feather';
import { isAddress } from 'ethers/lib/utils';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import SearchInput from './search';

const Header: React.FC<{}> = () => {
  const router = useRouter();
  const [address, setAddress] = useState<string>('');

  const { address: userAccount } = useAccount();

  return (
    <div className="w-full">
      <div className="w-full flex mx-auto items-center justify-between flex-wrap py-3 px-5 md:py-4 md:px-20 shadow dark:shadow-gray-300">
        <Link href="/">
          <a data-cy="nav-item" className="text-xl font-bold cursor-pointer">
            NIFTY
          </a>
        </Link>

        <SearchInput className="flex-1 hidden md:flex justify-center" />

        <div className="flex items-center">
          <div className="mr-3">
            {/* {theme === 'dark' ? (
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
            )} */}
          </div>

          <ConnectButton showBalance={false} accountStatus="avatar" />
          {userAccount && (
            <button
              className="mx-3 py-2 px-4 rounded-xl font-semibold shadow-lg text-black hover:scale-105 transition"
              onClick={() => {
                router.push({
                  pathname: '/address',
                  query: { address: userAccount },
                });
              }}
            >
              View Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
