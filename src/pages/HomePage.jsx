import ContentWrapper from '../components/ContentWrapper';
import HeroImage from '../components/HeroImage';
import HeroText from '../components/HeroText';

const HomePage = () => {
  return (
    <ContentWrapper>
      <main>
        <section className='hero-section grid md:mt-20 md:grid-cols-60/40 md:px-[150px]'>
          <HeroImage />
          <HeroText />
        </section>
      </main>
    </ContentWrapper>
  );
};

export default HomePage;
