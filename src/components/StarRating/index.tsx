import { Rating } from '@mui/material';
import { memo } from 'react';

interface IStarRatingProps {
  stars: number
}

const StarRating = ({ stars }: IStarRatingProps) => {

  const maxStars = 5;

  return (
    <Rating
      name="half-rating-read"
      max={maxStars}
      value={stars}
      defaultValue={2.5}
      precision={0.5}
      readOnly
    />
  );
};

export default memo(StarRating);