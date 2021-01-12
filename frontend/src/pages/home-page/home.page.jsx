import React from 'react';
import { HomeStyles, ImgBanner, BackgroundColor, BannerSection, TextBanner, MainSection, OfferCard } from './home.styles';

const HomePage = () => {
  return (
    <HomeStyles>
      <BannerSection>
        <BackgroundColor>
          <h1>Spanish course</h1>
        </BackgroundColor>
        <ImgBanner />
      </BannerSection>
      <TextBanner>
          <h2>Online course</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla culpa nam quae quibusdam at sapiente velit eius dignissimos dolores dicta?</p>
        </TextBanner>
      <MainSection>
        <OfferCard>
          <h5>Saber o Conocer</h5>
          <p>Hacer test</p>
        </OfferCard>
        <OfferCard></OfferCard>
        <OfferCard></OfferCard>
        <OfferCard></OfferCard>
        <OfferCard></OfferCard>
        <OfferCard></OfferCard>
      </MainSection>
    </HomeStyles>
  )
}

export default HomePage;
