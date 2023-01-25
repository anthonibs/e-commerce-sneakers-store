import styled from 'styled-components';

interface IBannerProps {
  width: string;
  height: string;
  objectFit: 'cover' | 'contain' | 'fill';
}

export const BannerContainer = styled.figure<IBannerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  a {
    height: inherit;
    width: inherit;
  }

  img {
    display: block;
    width: inherit;
    height: inherit;
    object-fit: ${({ objectFit }) => objectFit};
  }
`;