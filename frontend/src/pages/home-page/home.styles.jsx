import styled, { keyframes } from 'styled-components';

export const HomeStyles = styled.div`
  display:flex;
  flex-direction: column;
`;

export const BannerSection = styled.section`
  overflow:hidden;
  position:relative;
`;

const backgroundChange = keyframes`
  0%,13%{
    opacity:1;
    background-image: url('https://res.cloudinary.com/dg5pircnj/image/upload/v1604389766/my-school/valencia_zsuw62.jpg');
  }
  14%{
    opacity:0;
  }
  15%,27%{
    opacity:1;
    background-image: url('https://res.cloudinary.com/dg5pircnj/image/upload/v1604389764/my-school/valderrobres_i8eo6w.jpg');
  }
  28% {
    opacity:0
  }
  29%,42%{ 
    opacity:1;
    background-image: url('https://res.cloudinary.com/dg5pircnj/image/upload/v1604389762/my-school/terraza_suxej6.jpg');
  }
  43%{opacity:0}
  44%,56%{ 
    opacity:1;
    background-image: url('https://res.cloudinary.com/dg5pircnj/image/upload/v1604389760/my-school/molino_s2svl1.jpg');
  }
  57%{opacity:0}
  58%,70%{ 
    opacity:1;
    background-image: url('https://res.cloudinary.com/dg5pircnj/image/upload/v1604389759/my-school/barcelona_nzv2un.jpg');
  }
  71%{opacity:0}
  72%,84%{ 
    opacity:1;
    background-image: url('https://res.cloudinary.com/dg5pircnj/image/upload/v1604389756/my-school/bandera_dq3zhx.jpg');
  }
  85%{opacity:0}
  86%,99%{ 
    opacity:1;
    background-image: url('https://res.cloudinary.com/dg5pircnj/image/upload/v1604389754/my-school/alhambra_isvzu6.jpg');
  }
  100%{opacity:0}
`;

export const ImgBanner = styled.div`
  position: relative;
  margin: 0 auto;
  height: 70vh;
  
  background-position: center;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  animation: ${backgroundChange} 70s linear infinite;

`;

export const BackgroundColor = styled.div`
  z-index:50;
  position:absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(254, 0, 50,0.4);
  
  h1 {
    font-size:3em;
    position: absolute;
    width: 100%;
    color: rgb(254,0,50);
    margin-top: 60px;
  }
`;

export const TextBanner = styled.div`
  padding: 15px;
  position: relative;
  width: 40%;
  margin: -40px auto;
  background-color: rgb(254, 0, 50);
  color: white;
  border-radius: 5px;
  h2 {
    margin-bottom: 10px;
  }
`;

export const MainSection = styled.section`
  margin: 50px auto;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-between;
`;

export const OfferCard = styled.div`
  background-color: red;
  width: 200px;
  height: 350px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
