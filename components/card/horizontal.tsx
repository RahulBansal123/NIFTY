import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IHorizontalCard } from '../../types';

const HorizontalCard: React.FC<IHorizontalCard> = ({
  name,
  title,
  description,
  place,
  link,
  image,
}) => {
  return (
    <Link href={`/address?address=${link}`}>
      <a>
        <div className="shadow-lg my-8 max-w-sm w-full lg:max-w-full lg:flex rounded-xl overflow-hidden hover:scale-105 transition-all cursor-pointer">
          <div className="relative h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden">
            <Image
              src={image}
              alt="test"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <h3 className="text-gray-900 font-bold text-xl mb-2">{title}</h3>
              <p className="text-gray-700 text-sm md:text-base">
                {description}
              </p>
            </div>
            <div className="flex items-center">
              <Image
                src={image}
                alt={title}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div className="ml-4 text-sm">
                <p className="text-gray-900 leading-none">{name}</p>
                <p className="text-gray-600">{place}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default HorizontalCard;
