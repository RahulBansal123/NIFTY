export const resolveUrl = (url: string) => {
  if (url && url.startsWith('ipfs://')) {
    return `https://cloudflare-ipfs.com/ipfs/${url.split('ipfs://')[1]}`;
  }
  return url;
};
