import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ExternalLink } from 'react-feather';

import Header from '../components/navigation/header';
import Footer from '../components/navigation/footer';
import Box from '../components/framer/box';
import Card from '../components/card/horizontal';
import SearchInput from '../components/navigation/search';

const Device = dynamic(() => import('../components/device-detect'), {
  ssr: false,
});

const userData: {
  name: string;
  title: string;
  description: string;
  place: string;
  image: string;
  link: string;
}[] = [
  {
    name: 'Haardik H',
    title: 'Decentralized Identity and Education Maxi',
    description:
      'Founder @LearnWeb3, Full-Stack Developer,Smart Contracts Engineer',
    place: 'Toronto',
    image: '/haardikkk.jpeg',
    link: '0x0D1f2Bd5351a65a78Ac0BeF3C8fAEf643C046508',
  },
  {
    name: 'Kacie Ahmed',
    title: 'Developers 🚀🚀',
    description: 'Co-Founder @LearnWeb3',
    place: 'Toronto',
    image: '/Kacie.jpeg',
    link: '0x2097032f9446be3084dad0595dd88fcfdfe59fd4',
  },
  {
    name: 'Rahul Bansal',
    title: 'LFG🚀',
    description: 'Full-Stack Developer, Frontend Developer',
    place: 'India',
    image: '/rahul.jpg',
    link: '0xbc4Cf0A3A38328bf1C3B65BefA8C5665D620A0f4',
  },
];
const showcase: { image: string; title: string; contract: string }[] = [
  {
    image: '/learnweb3.png',
    title: 'Learn Web3',
    contract: 'https://opensea.io/collection/learnweb3',
  },
  {
    image: '/buildspace.jpeg',
    title: 'Buildspace',
    contract: 'https://opensea.io/collection/buildspace-v2',
  },
];

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Head>
        <title>NIFTY | Home</title>
        <meta name="description" content="Share your NFTs with the world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-1 container mx-auto px-6 mb-20 md:px-12">
        <section className="my-10 md:my-20 px-8">
          <Box className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <h1 className="h1 text-center md:text-left">
                  It&apos;s time to{' '}
                  <span className="text-primary-400">showcase </span>
                  your Non-Fungible Tokens
                </h1>
                <p className="w-full md:w-3/4 text-lg  text-gray-600 my-8">
                  Share what you have. Discover what others have. Collect what
                  you like.
                </p>

                <SearchInput className="flex md:hidden" />

                <p className="md:hidden my-5 text-center text-sm font-semibold text-gray-400">
                  --- OR ---
                </p>

                <div className="w-full text-center md:text-left">
                  <Link href="#discover">
                    <a className="btn btn-large-transition shadow-xl bg-primary-500 text-white">
                      Discover
                    </a>
                  </Link>
                </div>
              </div>
              <div className="relative w-full h-52 md:h-full mt-10 md:mt-0">
                <Image
                  src="/landing.png"
                  alt="illustration"
                  layout="fill"
                  className="object-cover"
                />
              </div>
            </div>
          </Box>
        </section>

        <section className="mt-20 mb-14 md:mt-40 md:mb-28 px-8">
          <Box className="w-full">
            <h2 className="h2 text-center">What you can showcase</h2>

            <Device>
              {({ isMobile }) => (
                <div className="w-full md:w-3/4 mx-auto flex flex-col mt-10">
                  {showcase.map((data) => (
                    <div
                      key={data.title}
                      className="my-4 w-full flex items-center border-2 border-green-700 px-2 py-3 md:px-8 md:py-6 rounded-md"
                    >
                      <Image
                        src={data.image}
                        alt="learnweb3"
                        width={isMobile ? 80 : 40}
                        height={isMobile ? 80 : 40}
                        className="rounded-full"
                      />
                      <h6 className="flex-1 ml-4 text-sm md:text-xl font-medium">
                        {data.title}
                      </h6>
                      <Link href={data.contract}>
                        <a
                          target="_blank"
                          className="flex items-center text-blue-500 overflow-hidden hover:underline text-sm md:text-xl"
                        >
                          <span className="ml-8 md:ml-1 md:mr-1 truncate">
                            {data.contract}
                          </span>{' '}
                          {!isMobile && <ExternalLink size={20} />}
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </Device>
          </Box>
        </section>

        <section id="discover" className="px-8">
          <Box className="w-full">
            <h2 className="h2 text-center">Top Users</h2>

            <p className="mt-6 text-center text-base md:text-lg text-gray-500">
              Find what top users are collecting and what is helping them to
              reach the top.
            </p>
          </Box>

          <div className="w-full md:w-3/4 mx-auto mt-8 flex flex-col">
            {userData.map((data) => (
              <Card
                key={data.name}
                name={data.name}
                title={data.title}
                description={data.description}
                place={data.place}
                link={data.link}
                image={data.image}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
