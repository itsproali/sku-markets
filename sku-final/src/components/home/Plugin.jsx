import { Grid, Link, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import plugin from '../../assets/images/plugin.png';

const Plugin = ({ arabic }) => {
  return (
    <Container sx={{ marginY: '150px' }} maxWidth={'lg'}>
      <Grid container spacing={2}>
        <Grid item lg={4} sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h4">
            {arabic ? 'الإضافات' : 'Plugins'}
          </Typography>
          <Typography sx={{ marginY: '15px', fontSize: '13px', padding: '10px' }} component="p">
            {arabic
              ? '"يتم توصيل منصة اس كي يو ماركتس بسهولة ببعض منصات التجارة الإلكترونية وعربات التسوق الأكثر شيوعًا في العالم'
              : 'Our SKU Markets platform plugs easily into some of the most popular Ecommerce platforms & shopping carts in the world'}
          </Typography>
          <Typography sx={{ marginY: '15px', fontSize: '13px', padding: '10px' }} component="p">
            {arabic
              ? 'تساعدك هذه  الإضافات على البدء دون الحاجة إلى أي برمجة. يمكنك استخداما لتحقيق تكامل سلس بإضافة قنواتك المتعددة للتحكم في معظم منصات التجارة الإلكترونية وعربات التسوق الرئيسية. فلدينا كل ما تحتاجه تجارتك الإلكترونية لتحقيق النجاح.'
              : 'These plugins help you get started without any programming needed. You can use the plugins for a seamless integration that easily allows you to add on your multi channels to take control of the most major Ecommerce & Shopping Carts platforms. Everything your Ecommerce needs to succeed.'}
          </Typography>
        </Grid>
        <Grid sx={{ marginY: 'auto' }} item lg={4}>
          <TextField
            size="small"
            id="standard-basic"
            label={arabic ? 'ابحث عن المنصة' : 'Find your PlatFrom'}
            fullWidth
            variant="standard"
          />
          <br />
          <button
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              color: '#0d6efd',
            }}
          >
            <Link
              href="/apps"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
                color: '#0d6efd',
              }}
            >
              {arabic ? 'تعرف على كيفية الدمج' : 'Learn about integration'}
              <HiOutlineArrowNarrowRight />
            </Link>
          </button>
        </Grid>
        <Grid item lg={4}>
          <img style={{ maxWidth: '100%' }} src={plugin} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Plugin;
