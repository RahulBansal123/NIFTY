import { FC } from 'react';
import ReactDOM from 'react-dom';
import { X } from 'react-feather';

import { IModal } from '../../types';

const Modal: FC<IModal> = ({ id, isOpen, title, children, setShow }) => {
  return ReactDOM.createPortal(
    <div
      className={
        'modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto z-[1000] ' +
        (isOpen ? 'block inset-0 bg-gray-700 bg-opacity-40' : 'hidden')
      }
      id={'modal' + id}
      tabIndex={-1}
      aria-labelledby={id}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal={isOpen}
    >
      <div className="mx-auto max-w-xs md:max-w-lg relative w-auto pointer-events-none my-14">
        <div className="border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="flex flex-shrink-0 items-center justify-between py-4 px-6 border-b border-gray-200 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id={id}
            >
              {title ?? ''}
            </h5>
            <button
              type="button"
              className="w-4 h-4 text-black border-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75"
              aria-label="close"
              onClick={() => setShow(false)}
            >
              <X />
            </button>
          </div>
          <div className="relative py-4 px-6">{children}</div>
          <div className="flex items-center justify-end py-3 px-6 border-t border-gray-200">
            <button
              type="button"
              className="px-6 py-2.5 rounded-lg bg-primary-500 text-white shadow hover:shadow-lg transition"
              onClick={() => {
                console.log('closing');
                setShow(false);
                console.log('closed');
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};

export default Modal;
