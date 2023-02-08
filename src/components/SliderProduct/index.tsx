import { memo, useCallback, useMemo, useState } from 'react';

import IconClose from 'components/svgs/IconClose';
import IconNext from 'components/svgs/IconNext';
import IconPrevious from 'components/svgs/IconPrevious';

import {
  ButtonControl,
  CardOverlay,
  ClosedOverlayCard,
  Container,
  GalleriesProducts,
  GalleryProduct,
  ImageModalMain,
  MainImage,
  MainProductImage,
  NextSlider,
  OverlayImage,
  PreviousSlider,
  ThumbnailItem,
  ThumbnailItems
} from './SliderProduct';

interface ISliderProduct {
  thumbnail: string;
  slider: string[];
  title: string;
}

const SliderProduct = ({ thumbnail, slider, title }: ISliderProduct) => {

  const [overlayImageProduct, setOverlayImageProduct] = useState<boolean>(false);
  const [indexImage, setIndexImage] = useState<number>(0);

  const openImageIndex = useCallback((index: number) => {
    setOverlayImageProduct(true);
    setIndexImage(index);
  }, []);

  const previousSlider = useCallback((index: number) => {
    if (index > 0) {
      setIndexImage(prevState => prevState - 1);
    }
    if (index <= 0) {
      setIndexImage(slider?.length - 1);
    }
  }, [slider?.length]);


  const nextSlider = useCallback((index: number) => {
    if (slider?.length > index) {
      setIndexImage(prevState => prevState + 1);
    }
    if (slider?.length - 1 === index) {
      setIndexImage(0);
    }
  }, [slider?.length]);

  const width = window.innerWidth;

  const innerWidth = useMemo(() => {
    return width;
  }, [width]);


  return (
    <Container>
      <MainProductImage>
        <PreviousSlider className='previous-slider'>
          <ButtonControl onClick={() => previousSlider(indexImage)}>
            <IconPrevious />
          </ButtonControl>
        </PreviousSlider>

        {innerWidth < 1000
          ?
          <ImageModalMain
            src={`/assets/products-shoes/${slider?.[indexImage]}.webp`}
            alt={title}
          />
          : <ImageModalMain
            src={`/assets/products-shoes/${thumbnail}.webp`}
            alt={title}
          />
        }

        <NextSlider className='next-slider'>
          <ButtonControl onClick={() => nextSlider(indexImage)}>
            <IconNext />
          </ButtonControl>
        </NextSlider>
      </MainProductImage>

      {innerWidth 
        &&
        <GalleriesProducts>
          {slider
          && slider?.map((image: string, index: number) => (
            <GalleryProduct key={index}
              onClick={() => openImageIndex(index)}
            >
              <img
                src={`/assets/products-shoes/${image}.webp`}
                alt={`Product gallery image, image ${index + 1} of ${slider?.length}`}
              />
            </GalleryProduct>
          ))}
        </GalleriesProducts>
      }

      {overlayImageProduct
        && <OverlayImage>
          <CardOverlay>
            <ClosedOverlayCard
              onClick={() => setOverlayImageProduct(false)}
            >
              <IconClose />
            </ClosedOverlayCard>

            <MainImage>
              <PreviousSlider>
                <ButtonControl onClick={() => previousSlider(indexImage)}>
                  <IconPrevious />
                </ButtonControl>
              </PreviousSlider>

              <ImageModalMain
                src={`/assets/products-shoes/${slider?.[indexImage]}.webp`}
                alt="Imagem teste"
              />

              <NextSlider>
                <ButtonControl onClick={() => nextSlider(indexImage)}>
                  <IconNext />
                </ButtonControl>
              </NextSlider>
            </MainImage>

            <ThumbnailItems>
              {slider
                && slider?.map((image: string, index: number) => (
                  <ThumbnailItem key={index}
                    onClick={() => openImageIndex(index)}
                    className={
                      indexImage === index ? 'active-slider' : ''
                    }
                  >
                    <img
                      src={`/assets/products-shoes/${image}.webp`}
                      alt={`Product gallery image, image ${index + 1} of ${slider?.length}`}
                    />
                  </ThumbnailItem>
                ))}
            </ThumbnailItems>
          </CardOverlay>
        </OverlayImage>
      }
    </Container>
  );
};

export default memo(SliderProduct);