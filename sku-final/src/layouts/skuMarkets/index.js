import { Box } from '@mui/material';
import LineScrollCount from 'components/common/LineScrollCount';
import { useLocales } from 'locales';
import { Outlet } from 'react-router';
import SkuFooter from './Footer/SkuFooter';
import SKUHeader from './Header/SKUHeader';

const SkuMarketsLayout = () => {
  const { dynamicLang } = useLocales();
  const arabic = dynamicLang === 'ar';
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <SKUHeader arabic={arabic} />

      <Box component="main">
        <LineScrollCount />
        <Outlet />
      </Box>
      <SkuFooter arabic={arabic} />
    </Box>
  );
};

export default SkuMarketsLayout;
