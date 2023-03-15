export default function getRatings(rating) {
  const stars = [...Array(rating).fill(true), ...Array(5 - rating).fill(false)];
  return stars;
}
