/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
// @mui
import { Stack } from '@mui/material';
// @mui
import { Link } from '@mui/material';
import { useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';

export default function NavDesktop({ isOffset, data, arabic }) {
  let location = useLocation();
  const links = [
    {
      title: arabic ? 'الرئيسية' : 'Home',
      path: '/#home',
    },
    {
      title: arabic ? 'اس كي يو ماركتس' : 'SKU Markets',
      path: '/become_partner/#TrySkuMarket',
    },
    {
      title: arabic ? 'كيف تعمل المنصة' : 'How it works!',
      path: '/become_partner/#MarketSolution',
    },
    {
      title: arabic ? 'الأسئلة الشائعة' : 'FAQ',
      path: '/become_partner/#FAQSection',
    },
    {
      title: arabic ? 'خطط الأسعار' : 'Pricing Plans',
      path: '/become_partner/#PricingPlans',
    },
    {
      title: arabic ? 'تواصل معنا ' : 'Contact Us',
      path: '/become_partner/#ContactUs',
    },
  ];
  return (
    <Stack component="nav" direction="row" spacing={4}>
      {links.map((link) => (
        <NavList key={link.title} link={link} />
      ))}
    </Stack>
  );
}

const NavList = ({ link }) => {
  const { title, path } = link;

  return (
    <Link
      sx={{ color: '#0d6efd', fontSize: { md: 14, lg: 16 } }}
      component={HashLink}
      to={path || `/`}
      underline="none"
      color="inherit"
    >
      {title}
    </Link>
  );
};
