const countDuration = (dur) => {
  let hours = Math.floor(dur / 60);
  let minutes = dur % 60;
  hours = hours === 0 ? '' : `${hours}ч`;
  minutes = minutes < 10 ? `0${minutes}м` : `${minutes}м`;
  return `${hours} ${minutes}`;
};

export default countDuration;
