import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ExternalLink } from 'react-feather';
import { useQuery } from 'urql';
import { toast } from 'react-toastify';

import Header from '../components/navigation/header';
import Footer from '../components/navigation/footer';
import { isAddress } from 'ethers/lib/utils';
import Spinner from '../components/spinner';

const VerticalCard = dynamic(() => import('../components/card/vertical'), {
  ssr: false,
});

const nftQuery = `
  query ($owner: String!, $organization: String!) {
    skillNFTs(first: 1000, where: {owner: $owner organization: $organization}) {
        owner
        tokenId
        tokenURI
        organization
    }
  }
`;

const AddressPage: NextPage = () => {
  const router = useRouter();
  const { address } = router.query;

  useEffect(() => {
    if (address && !isAddress(address as string)) {
      toast.error('Invalid Address');
    }
  }, [address]);

  const [
    {
      data: learnWeb3Data,
      fetching: isLearnWeb3Fetching,
      error: learnWeb3Error,
    },
  ] = useQuery({
    query: nftQuery,
    variables: { owner: address, organization: 'LearnWeb3' },
    pause: !isAddress(address as string),
    requestPolicy: 'cache-and-network',
  });

  const [
    {
      data: buildspaceData,
      fetching: isBuildspaceFetching,
      error: buildspaceError,
    },
  ] = useQuery({
    query: nftQuery,
    variables: { owner: address, organization: 'buildspace' },
    pause: !isAddress(address as string),
    requestPolicy: 'cache-and-network',
  });

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Head>
        <title>NIFTY | Search</title>
        <meta name="description" content={`View ${address}'s NFTs on Nifty`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-1 container mx-auto px-6 mb-20 md:px-12">
        <section className="my-10">
          {(isLearnWeb3Fetching || isBuildspaceFetching) && <Spinner />}

          {(learnWeb3Error || buildspaceError) && (
            <p className="mt-10 text-center">
              Oops! Your NFTs crashed our server. Please try back in sometime.
            </p>
          )}

          {!(isLearnWeb3Fetching || isBuildspaceFetching) && (
            <div className="flex items-center">
              <h1 className="flex-1 text-lg md:text-3xl font-semibold truncate">
                Hey <span className="font-light">{address}</span>,
              </h1>

              <button
                className="flex items-center hover:underline cursor-pointer text-sm md:text-base text-gray-600"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast.success('Copied to clipboard');
                }}
              >
                <ExternalLink className="mx-1" color="#475569" size={20} />
                Share Profile
              </button>
            </div>
          )}
        </section>

        {!isLearnWeb3Fetching && (
          <section className="my-10">
            <div className="md:my-10 flex items-center">
              <Image
                src="//learnweb3.png"
                alt="learnweb3"
                width={40}
                height={40}
                className="rounded-full mx-4"
              />
              <h3 className="ml-2 text-xl md:text-2xl font-semibold">
                LearnWeb3
              </h3>
            </div>

            <div className="w-full flex flex-col md:flex-row">
              {learnWeb3Data?.skillNFTs?.length === 0 && (
                <p className="mt-10 w-full text-gray-600 text-center">
                  No LearnWeb3 NFTs found
                </p>
              )}

              {learnWeb3Data?.skillNFTs?.map((nft: any) => (
                <VerticalCard
                  key={nft.organization + nft.tokenId}
                  tokenURI={nft.tokenURI}
                  organization={nft.organization}
                />
              ))}
            </div>
          </section>
        )}

        {!isBuildspaceFetching && (
          <section className="my-10">
            <div className="md:my-10 flex items-center ">
              <Image
                src="//buildspace.jpeg"
                alt="buildspace"
                width={40}
                height={40}
                className="rounded-full mx-4"
              />
              <h3 className="ml-2 text-xl md:text-2xl font-semibold">
                Buildspace
              </h3>
            </div>

            <div className="w-full flex">
              {buildspaceData?.skillNFTs?.length === 0 && (
                <p className="mt-10 w-full text-gray-600 text-center">
                  No Buildspace NFTs found
                </p>
              )}

              {buildspaceData?.skillNFTs?.map((nft: any) => (
                <VerticalCard
                  key={nft.organization + nft.tokenId}
                  tokenURI={nft.tokenURI}
                  organization={nft.organization}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AddressPage;
