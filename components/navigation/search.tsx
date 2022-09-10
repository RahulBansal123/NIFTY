import { isAddress } from 'ethers/lib/utils';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Search } from 'react-feather';
import { toast } from 'react-toastify';

import { ISearchInput } from '../../types';

const SearchInput: FC<ISearchInput> = ({ className }) => {
  const [address, setAddress] = useState<string>('');
  const router = useRouter();

  const handleSearch = () => {
    if (isAddress(address)) {
      router.push({
        pathname: '/address',
        query: { address },
      });
    } else {
      toast.error('Invalid address');
    }
  };

  return (
    <div className={className}>
      <div className="flex items-center border px-2 rounded-lg bg-gray-100 hover:bg-white">
        <Search
          color="#9ca3af"
          onClick={handleSearch}
          className="cursor-pointer"
        />
        <input
          data-cy="search-input"
          className="input bg-inherit text-gray-600 placeholder:text-gray-400"
          placeholder="Search"
          value={address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAddress(e.target.value)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSearch();
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchInput;
