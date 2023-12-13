export const getDate = () => {
  const today = new Date();
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return new Intl.DateTimeFormat('En-US', options).format(today);
};
