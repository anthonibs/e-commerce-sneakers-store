import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from './ScrollToTop';

import { BiArrowToTop } from 'react-icons/bi';

const ScrollToTop = () => {

  const { pathname } = useLocation();

  const [visible, setVisible] = useState<boolean>(false);
  const [progressScroll, setProgressScroll] = useState<number>(0);


  const toggleVisible = () => {
    const scrolled = window.scrollY;
    const totalPageSize = window.document.documentElement.scrollHeight;
    const visiblePageArea = window.document.documentElement.clientHeight;

    const percentageOfProgress = Number((scrolled / ((totalPageSize - visiblePageArea)) * 100).toFixed(0));
    setProgressScroll(percentageOfProgress);

    if (scrolled >= 300) setVisible(true);
    if (scrolled < 300) setVisible(false);
  };


  const handlerScrollToTop = () => {
    window.scrollTo(
      {
        behavior: 'smooth',
        top: 0,
        left: 0
      }
    );
  };

  const arrowTop = useMemo(() => {
    return <BiArrowToTop className='arrow-top' />;
  }, []);


  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };

  }, [pathname]);


  return (
    <>
      <Container
        onClick={handlerScrollToTop}
        className={visible ? 'active-scrolltop' : ''}
      >
        <svg className='circle-progress'>
          <circle cx="25" cy="25" r="24"></circle>
          <circle cx="25" cy="25" r="24"
            style={
              {
                strokeDashoffset: `${(170 - (150 * progressScroll) / 100)}`
              }
            }
          ></circle>
        </svg>
        {arrowTop}
      </Container>
    </>
  );
};

export default ScrollToTop;