import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'react-feather';
import axios from 'axios';
import ReactPlayer from 'react-player';
import * as Sentry from '@sentry/nextjs';

import { resolveUrl } from '../../utils';
import ImageWithFallback from '../image';
import Modal from '../modal';
import { IVerticalCard, IVerticalCardData } from '../../types';

const VerticalCard: React.FC<IVerticalCard> = ({ tokenURI, organization }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState<IVerticalCardData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resolvedURL = resolveUrl(tokenURI);
        const response = await axios.get(resolvedURL);
        setData(response.data);
      } catch (error) {
        Sentry.captureException(error);
        console.log(error);
      }
    };
    fetchData();
  }, [tokenURI]);

  return (
    <>
      <button
        className="mx-5 my-4 max-w-sm shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-all cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        {data && (
          <>
            <div className="relative h-60 w-full">
              {data?.image && !data?.image.endsWith('.mp4') && (
                <ImageWithFallback
                  src={resolveUrl(data?.image)}
                  alt={data?.name ?? ''}
                  layout="fill"
                  className="object-cover rounded-xl"
                />
              )}
              {data?.image && data?.image.endsWith('.mp4') && (
                <ReactPlayer
                  url={data.image}
                  width="100%"
                  height="100%"
                  playing={true}
                />
              )}
            </div>
            <h4 className="px-6 py-4 font-bold text-xl truncate">
              {data.name}
            </h4>
          </>
        )}
      </button>

      {showModal && (
        <Modal
          id={Math.random().toString(36).substring(2, 9)}
          isOpen={showModal}
          setShow={setShowModal}
          title={data?.name}
        >
          <div className="relative w-full h-60">
            {data?.image && !data?.image.endsWith('.mp4') && (
              <ImageWithFallback
                src={resolveUrl(data?.image)}
                alt={data?.name ?? ''}
                layout="fill"
                className="object-contain rounded-xl"
              />
            )}
            {data?.image && data?.image.endsWith('.mp4') && (
              <ReactPlayer
                url={data.image}
                width="100%"
                height="100%"
                playing={true}
                controls={true}
              />
            )}
          </div>

          <p className="my-6 text-gray-700 text-base">{data?.description}</p>

          <div className="flex item justify-between text-gray-700 text-base overflow-hidden">
            <p className="font-semibold mr-5">{organization}</p>
            {data?.external_url && (
              <Link href={data?.external_url}>
                <a
                  target="_blank"
                  className="flex items-center text-blue-500 hover:underline truncate"
                >
                  <ExternalLink size={14} className="mr-1" />
                  {data.external_url}
                </a>
              </Link>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default VerticalCard;
