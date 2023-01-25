import { MdOutlineStarOutline, MdOutlineStarHalf, MdOutlineStarPurple500 } from 'react-icons/md';

interface IStarRatingProps {
  rating: number
}

const StarRating = ({ rating }: IStarRatingProps) => {

  function starRating(rating: number) {
    if (rating < .4) {
      return (
        <>
          < MdOutlineStarOutline color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
        </>
      );
    }

    if (rating >= .4 && rating < .95) {
      return (
        <>
          < MdOutlineStarHalf color='#FFCC00' size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
        </>
      );
    }

    if (rating >= .95 && rating < 1.30) {
      return (
        <>
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
        </>
      );
    }
    if (rating >= 1.30 && rating < 2) {
      return (
        <>
          < MdOutlineStarPurple500 color='#FFCC00' size={20} />
          < MdOutlineStarHalf color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
        </>
      );
    }
    if (rating >= 2 && rating < 2.31) {
      return (
        <>
          < MdOutlineStarPurple500 color='#FFCC00' size={20} />
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
        </>
      );
    }
    if (rating >= 2.3 && rating < 3) {
      return (
        <>
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarHalf color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
        </>
      );
    }
    if (rating >= 3 && rating < 3.3) {
      return (
        <>
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
        </>
      );
    }
    if (rating >= 3.3 && rating < 4) {
      return (
        <>
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarHalf color="#FFCC00" size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
        </>
      );
    }
    if (rating >= 4 && rating < 4.3) {
      return (
        <>
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarPurple500 color='#FFCC00' size={20} />
          < MdOutlineStarOutline color="#FFCC00" size={20} />
        </>
      );
    }
    if (rating >= 4.3 && rating < 4.7) {
      return (
        <>
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarHalf color='#FFCC00' size={20} />
        </>
      );
    }
    if (rating >= 4.7) {
      return (
        <>
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
          < MdOutlineStarPurple500 color="#FFCC00" size={20} />
        </>
      );
    }
  }

  return (
    <>
      {starRating(rating)}
    </>
  );
};

export default StarRating;