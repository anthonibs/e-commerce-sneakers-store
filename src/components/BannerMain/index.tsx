import { Link } from 'react-router-dom';
import { BannerContainer } from './BannerMain';

interface IBannerMainProps {
  url: string;
  title: string;
  link?: string | undefined;
  width: string;
  height: string;
  objectFit: 'cover' | 'contain' | 'fill';
}

const BannerMain = ({ url, title, link = undefined, width, height, objectFit }: IBannerMainProps) => {

  return (
    <BannerContainer
      width={width}
      height={height}
      objectFit={objectFit}
    >
      {link
        ?
        <Link to={link}>
          <img src={url} alt={title} />
        </Link>
        : <img src={url} alt={title} />
      }
    </BannerContainer>
  );
};

export default BannerMain;