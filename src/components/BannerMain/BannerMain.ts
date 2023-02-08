import styled from 'styled-components';

interface IBannerProps {
  width: string;
  height: string;
  objectFit: 'cover' | 'contain' | 'fill';
}

export const BannerContainer = styled.figure<IBannerProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  a {
    height: inherit;
    width: inherit;
  }

  img {
    display: block;
    height: inherit;
    object-fit: ${({ objectFit }) => objectFit};
    width: inherit;
  }
`;