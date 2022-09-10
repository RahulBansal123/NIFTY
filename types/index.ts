export interface IHorizontalCard {
  name: string;
  title: string;
  description: string;
  place: string;
  link: string;
  image: string;
}

export interface IVerticalCard {
  tokenURI: string;
  organization: string;
}

export interface IVerticalCardData {
  name: string;
  description: string;
  image: string;
  external_url: string;
}

export interface IBox {
  children: React.ReactNode;
  className: string;
}

export interface IImage {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
}

export interface IModal {
  id: string;
  isOpen: boolean;
  title: string | undefined;
  children: React.ReactNode;
  setShow: (value: boolean) => void;
}
