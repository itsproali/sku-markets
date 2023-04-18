import { Box, Container, Grid, Typography } from '@mui/material';
import style from './styles/Map.module.css';

const MapLocation = ({ arabic }) => {
  return (
    <>
      <div className={style.mapbg}>
        <Container
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginY: '100px' }}
          maxWidth="xl"
        >
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <Box sx={{ padding: '50px' }}>
                <Typography variant="h4" component="h5">
                  {arabic
                    ? 'نقدم خدماتنا لتستفيد منها مجموعة البلدان المستهدفة والأسواق والبائعون على اختلاف منتجاتهم'
                    : 'Targeted Countries, Marketplaces, and Sellers benefits our services'}
                </Typography>
                <Typography component="p">
                  {arabic
                    ? 'تعظيم كفاءة البلدان والفئات التجارية عبر التجارة الإلكترونية هو هدفنا الأول. '
                    : 'Maximize the Efficiency of your Ecommerce Business Cross Countries and Categories!'}
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4}></Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default MapLocation;
