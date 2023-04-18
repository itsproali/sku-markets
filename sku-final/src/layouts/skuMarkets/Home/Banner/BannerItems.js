import shop1 from '../../../../assets/images/home-banner/1.jpg';
import shop2 from '../../../../assets/images/home-banner/2.jpg';
import shop3 from '../../../../assets/images/home-banner/3.jpg';
import shop4 from '../../../../assets/images/home-banner/4.jpg';
import shopAr1 from '../../../../assets/images/home-banner/ar1.jpg';
import shopAr2 from '../../../../assets/images/home-banner/ar2.jpg';
import shopAr3 from '../../../../assets/images/home-banner/ar3.jpg';
import shopAr4 from '../../../../assets/images/home-banner/ar4.jpg';
import mega1 from '../../../../assets/images/home-banner/mega-Deal-1.jpg';
import mega2 from '../../../../assets/images/home-banner/mega2.jpg';
import mega3 from '../../../../assets/images/home-banner/mega3.jpg';
import mega4 from '../../../../assets/images/home-banner/mega4.jpg';

const BannerItems = (arabic) => {
  const MegaDeal = [
    {
      label: arabic ? 'المنتجات الأعلى تقييمًا' : 'Top-rated Products',
      sublabel: arabic ? 'احصل على أفضل المنتجات بأفضل الأسعار' : 'Get the best at the best prices',
      image: mega1,
      destination: '/skuMarket?brand=Apple&marketplace=noon%2Fegypt',
    },
    {
      label: arabic ? 'الأعلى مبيعًا' : 'Bestsellers',
      sublabel: arabic ? 'أكثر الاختيارات شعبية' : 'Most popular picks',
      image: mega2,
      destination: '/skuMarket?brand=Apple&marketplace=noon%2Fegypt',
    },
    {
      label: arabic ? 'وصل حديثًا' : 'New arrivals',
      sublabel: arabic ? 'ابقَ على اطلاع دائم' : 'Stay up to date',
      image: mega3,
      destination: '/skuMarket?brand=Apple&marketplace=noon%2Fegypt',
    },
    {
      label: arabic ? 'ماركات اس كي يو ' : 'SKU Brands',
      sublabel: arabic ? 'أساسيات بأسعار منخفضة' : 'Essentials at low prices',
      image: mega4,
      destination: '/skuMarket?brand=Apple&marketplace=noon%2Fegypt',
    },
  ];
  const SHOP = [
    {
      label: arabic ? 'المنتجات الأعلى تقييمًا' : 'Top-rated Products',
      sublabel: arabic ? 'احصل على أفضل المنتجات بأفضل الأسعار' : 'Get the best at the best prices',
      image: arabic ? shopAr1 : shop1,
    },
    {
      label: arabic ? 'الأعلى مبيعًا' : 'Bestsellers',
      sublabel: arabic ? 'أكثر الاختيارات شعبية' : 'Most popular picks',
      image: arabic ? shopAr2 : shop2,
    },
    {
      label: arabic ? 'وصل حديثًا' : 'New arrivals',
      sublabel: arabic ? 'ابقَ على اطلاع دائم' : 'Stay up to date',
      image: arabic ? shopAr3 : shop3,
    },
    {
      label: arabic ? 'ماركات اس كي يو ' : 'SKU Brands',
      sublabel: arabic ? 'أساسيات بأسعار منخفضة' : 'Essentials at low prices',
      image: arabic ? shopAr4 : shop4,
    },
  ];
  return { MegaDeal, SHOP };
};

export default BannerItems;
