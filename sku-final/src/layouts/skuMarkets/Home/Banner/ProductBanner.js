import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import AnimatedGradiantText from 'components/common/AnimatedGradiantText';
import { Link } from 'react-router-dom';
import ramadan from '../../../../assets/images/home-banner/ramadanDeal.jpg';
import ramadanAr from '../../../../assets/images/home-banner/ramadanDealAr.png';
import skuFocus from '../../../../assets/images/home-banner/skuFocus.jpg';
import skuFocusAr from '../../../../assets/images/home-banner/skuFocusAr.jpg';
import BannerItems from './BannerItems';

const ProductBanner = ({ arabic }) => {
  const { SHOP, MegaDeal } = BannerItems(arabic);
  return (
    <>
      <Box sx={{ my: 5, px: 1 }}>
        <Grid container spacing={3}>
          <Grid
            xs={12}
            md={3.8}
            sx={{
              height: { md: '510px', xs: 'auto' },
              py: 2,
              bgcolor: 'background.paper',
              borderRadius: 2,
              mr: 2,
              boxShadow: 1,
              mb: { xs: 2, sm: 2, md: 0 },
            }}
          >
            <Typography variant="subtitle1" sx={{ pl: 2, pb: 0.5, fontSize: '18px' }}>
              {arabic ? 'اكتشف كل جديد' : 'Explore new stock'}
            </Typography>
            <Grid container spacing={1}>
              {SHOP.map((shop, i) => (
                <Grid item key={i} xs={12} md={6}>
                  <Box sx={{ px: 0.5 }}>
                    <Box
                      component="img"
                      src={shop.image}
                      alt=""
                      height="150px"
                      width="100%"
                      sx={{ borderRadius: 1 }}
                    />
                    <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>
                      {shop.label}
                    </Typography>
                    <Typography variant="caption">{shop.sublabel}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', pr: 1 }}>
              <AnimatedGradiantText>
                {' '}
                {arabic ? 'إعلان ممول' : 'Sponsored Ads'}
              </AnimatedGradiantText>
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={3.8}
            sx={{
              height: { md: '510px', xs: 'auto' },
              py: 2,
              bgcolor: 'background.paper',
              borderRadius: 2,
              mr: 2,
              boxShadow: 1,
              mb: { xs: 2, sm: 2, md: 0 },
            }}
          >
            <Typography variant="subtitle1" sx={{ pl: 2, pb: 0.5, fontSize: '18px' }}>
              {arabic ? 'الماركات الأكثر طلبًا' : 'Brands highly demand'}
            </Typography>
            <Grid container spacing={1}>
              {MegaDeal.map((deal, i) => (
                <Grid key={i} xs={12} md={6}>
                  <Link to={deal.destination} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Box sx={{ px: 0.5 }}>
                      <Box
                        component="img"
                        src={deal.image}
                        alt=""
                        height="150px"
                        width="100%"
                        sx={{ borderRadius: 1 }}
                      />
                      <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>
                        {deal.label}
                      </Typography>
                      <Typography variant="caption">{deal.sublabel}</Typography>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', pr: 1 }}>
              <AnimatedGradiantText>{arabic ? 'إعلان ممول' : 'Sponsored Ads'}</AnimatedGradiantText>
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={4.1}
            sx={{
              height: { md: '510px', xs: 'auto' },
              py: 2,
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="subtitle1" sx={{ pl: 2, pb: 1, fontSize: '18px' }}>
              {arabic ? 'اس كي يو ماركت تحت الأضواء' : 'SKU Markets In focus'}
            </Typography>
            <Stack direction="column" spacing={2}>
              <Link to="/skuMarket?category=Electronics%20%26%20Mobiles&marketplace=noon%2Fksa">
                <Box
                  component="img"
                  src={arabic ? ramadanAr : ramadan}
                  alt=""
                  height="175px"
                  sx={{ borderRadius: 2, p: 1 }}
                />
              </Link>
              <Typography variant="subtitle1" sx={{ pl: 2, fontSize: '18px' }}>
                {arabic ? 'اس كي يو ماركت تحت الأضواء' : 'SKU Markets In focus'}
              </Typography>
              <Box
                component="img"
                src={arabic ? skuFocusAr : skuFocus}
                alt=""
                height="175px"
                sx={{ borderRadius: 2, p: 1 }}
              />
            </Stack>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                pr: 1,
                pt: 1,
              }}
            >
              <AnimatedGradiantText>{arabic ? 'إعلان ممول' : 'Sponsored Ads'}</AnimatedGradiantText>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductBanner;
