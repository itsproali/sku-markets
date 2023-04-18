import { Box } from '@mui/material';
import LineScrollCount from 'components/common/LineScrollCount';
import ActiveSKUProductsMarquee from 'components/common/marquee/ActiveSKUProductsMarquee';
import ContactUs from 'components/home/ContactUs';
import { useLocales } from 'locales';
import { Helmet } from 'react-helmet-async';
import FAQSection from '../components/home/FAQSection';
import HomeTable from '../components/home/HomeTable';
import LandingPage from '../components/home/LandingPage';
import MapLocation from '../components/home/MapLocation';
import MarketSolution from '../components/home/MarketSolution';
import Plugin from '../components/home/Plugin';
import PricingCard from '../components/home/PricingCard';
import SkuSolution from '../components/home/SkuSolution';
import TrySkuMarket from '../components/home/TrySkuMarket';

const PageHome = () => {
  const { dynamicLang } = useLocales();
  const arabic = dynamicLang === 'ar';
  return (
    <>
      <Helmet>
        <title> Become A Partner | SKU Markets</title>
      </Helmet>
      <LineScrollCount />
      <LandingPage arabic={arabic} />
      <Box sx={{ mt: { md: 10, xs: 0 } }}>
        <ActiveSKUProductsMarquee />
      </Box>
      <MapLocation arabic={arabic} />
      <TrySkuMarket arabic={arabic} />
      <HomeTable arabic={arabic} />
      <MarketSolution arabic={arabic} />
      <SkuSolution arabic={arabic} />
      <Plugin arabic={arabic} />
      <FAQSection arabic={arabic} />
      <PricingCard arabic={arabic} />
      <ContactUs arabic={arabic} />
    </>
  );
};

export default PageHome;
