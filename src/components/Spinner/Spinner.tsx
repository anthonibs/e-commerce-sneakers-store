import styled, { keyframes } from 'styled-components';


const pulse = keyframes`
  0%{
    transform: scale(1);
  }
  
  50%{
    transform: scale(0.01);
  }
  
  100%{
    transform: scale(1);
  }
`;

const fade = keyframes`
  0%{
    background:rgba(255, 121, 26, .45);
  }
  
  50%{
    background:  #db6e20;
  }
  
  100%{
    background: #ff7300;
  }
`;


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(1px);
  z-index: 9999;
  background: ${({theme}) => theme.colors.neutral[700]};

  .socket{
    width: 200px;
    height: 200px;
    position: relative;
    top: -30px;
  }
  
  .hex-brick{
    background: ${({theme}) => theme.colors.primary[100]};
    width: 30px;
    height: 17px;
    position: absolute;
    top: 5px;
    animation-name: ${fade};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  
  .h2{
    transform: rotate(60deg);
  }
  
  .h3{
    transform: rotate(-60deg);
  }
  
  .gel{
    height: 30px;
    width: 30px;	
    transition: all .3s;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  
  .center-gel{
    margin-left: -15px;
    margin-top: -15px;
    animation-name: ${pulse};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  
  .c1{
    margin-left: -47px;
    margin-top: -15px;
  }
  
  .c2{
    margin-left: -31px;
    margin-top: -43px;
  }
  
  .c3{
    margin-left: 1px;
    margin-top: -43px;
  }
  
  .c4{
    margin-left: 17px;
    margin-top: -15px;
  }
  .c5{
    margin-left: -31px;
    margin-top: 13px;
  }
  
  .c6{
    margin-left: 1px;
    margin-top: 13px;
  }
  
  .c7{
    margin-left: -63px;
    margin-top: -43px;
  }
  
  .c8{
    margin-left: 33px;
    margin-top: -43px;
  }
  
  .c9{
    margin-left: -15px;
    margin-top: 41px;
  }
  
  .c10{
    margin-left: -63px;
    margin-top: 13px;
  }
  
  .c11{
    margin-left: 33px;
    margin-top: 13px;
  }
  
  .c12{
    margin-left: -15px;
    margin-top: -71px;
  }
  
  .c13{
    margin-left: -47px;
    margin-top: -71px;
  }
  
  .c14{
    margin-left: 17px;
    margin-top: -71px;
  }
  
  .c15{
    margin-left: -47px;
    margin-top: 41px;
  }
  
  .c16{
    margin-left: 17px;
    margin-top: 41px;
  }
  
  .c17{
    margin-left: -79px;
    margin-top: -15px;
  }
  
  .c18{
    margin-left: 49px;
    margin-top: -15px;
  }
  
  .c19{
    margin-left: -63px;
    margin-top: -99px;
  }
  
  .c20{
    margin-left: 33px;
    margin-top: -99px;
  }
  
  .c21{
    margin-left: 1px;
    margin-top: -99px;
  }
  
  .c22{
    margin-left: -31px;
    margin-top: -99px;
  }
  
  .c23{
    margin-left: -63px;
    margin-top: 69px;
  }
  
  .c24{
    margin-left: 33px;
    margin-top: 69px;
  }
  
  .c25{
    margin-left: 1px;
    margin-top: 69px;
  }
  
  .c26{
    margin-left: -31px;
    margin-top: 69px;
  }
  
  .c27{
    margin-left: -79px;
    margin-top: -15px;
  }
  
  .c28{
    margin-left: -95px;
    margin-top: -43px;
  }
  
  .c29{
    margin-left: -95px;
    margin-top: 13px;
  }
  
  .c30{
    margin-left: 49px;
    margin-top: 41px;
  }
  
  .c31{
    margin-left: -79px;
    margin-top: -71px;
  }
  
  .c32{
    margin-left: -111px;
    margin-top: -15px;
  }
  
  .c33{
    margin-left: 65px;
    margin-top: -43px;
  }
  
  .c34{
    margin-left: 65px;
    margin-top: 13px;
  }
  
  .c35{
    margin-left: -79px;
    margin-top: 41px;
  }
  
  .c36{
    margin-left: 49px;
    margin-top: -71px;
  }
  
  .c37{
    margin-left: 81px;
    margin-top: -15px;
  }
  
  .r1{
    animation-name: ${pulse};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: .2s;
  }
  
  .r2{
    animation-name: ${pulse};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: .4s;
  }
  
  .r3{
    animation-name: ${pulse};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: .6s;
  }
  
  .r1 > .hex-brick{
    animation-name: ${fade};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: .2s;
  }
  
  .r2 > .hex-brick{
    animation-name: ${fade};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: .4s;
  }
  
  .r3 > .hex-brick{
    animation-name: ${fade};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: .6s;
  }
`;
