const getMovieDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  const formattedResult = `${hours}h ${minutes
    .toString()
    .padStart(2, "0")}m`;

  return formattedResult;
};

const refreshPage = () => {
  window.location.reload();
}

export {
    getMovieDuration,
    refreshPage
}