import React from 'react';
import Link from 'next/link';
import { Twitter, GitHub, Linkedin } from 'react-feather';

const socials: { href: string; icon: any }[] = [
  { href: 'https://twitter.com/', icon: Twitter },
  {
    href: 'https://github.com/rahulbansal123/nifty',
    icon: GitHub,
  },
  { href: 'https://linkedin.com/', icon: Linkedin },
];

const Footer: React.FC<{}> = () => {
  return (
    <footer className="w-full flex mx-auto items-center justify-between py-6 px-5 md:px-20 bg-black text-gray-100">
      <Link href="/">
        <a className="text-xl font-bold cursor-pointer">NIFTY</a>
      </Link>
      <p className="text-sm md:text-md text-gray-100">© 2022 NIFTY.</p>
      <div className="flex flex-row md:space-x-2 items-center cursor-pointer">
        {socials.map((social, index) => (
          <Link href={social.href} key={index}>
            <a target="_blank">
              <social.icon
                className="w-4 h-4 md:w-7 md:h-7 mx-2 hover:scale-110"
                strokeWidth={1.5}
              />
            </a>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
