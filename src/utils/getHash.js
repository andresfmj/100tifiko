const getHash = () =>
  location.hash.slice(1)
    .toLocaleUpperCase().split('/')[1] || '/';

export default getHash;
