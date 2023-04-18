import { Box, Grid, Paper, Typography } from '@mui/material';
import CustomBadge from 'components/common/CustomBadge/CustomBadge';
import { selectPlan } from 'features/plan/planSlice';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import style from './styles/PricingCard.module.css';

const PricingPlan = ({
  checked,
  freeValue,
  launchValue,
  professionalValue,
  businessValue,
  growValue,
  teamValue,
  getCrncy,
  defaultCurrency,
  arabic,
}) => {
  let navigate = useNavigate();

  const PRICING_PLAN = [
    {
      plan: arabic ? 'باقة أسواق بي تو بي' : 'B2B Marketplace',
      title: arabic
        ? 'مثالي للشركات الناشئة والشركات النامية'
        : 'Perfect for startups and growing businesses',
      currency: `${getCrncy?.label ? getCrncy.label : defaultCurrency.label}`,
      price: `${Math.round(freeValue * (getCrncy?.rate || defaultCurrency?.rate))}`,
      qty: `${checked ? 12 : 1}`,
      subTitle: arabic
        ? 'عدد غير محدود من رموز التخزين التعريفية الخاصة بك'
        : 'Up to Unlimited Of Your SKUs',
      available: arabic ? 'عبر البلدان والفئات المختلفة' : 'Cross Countries & Categories',
      description: [
        arabic ? ' ميزة اس كس يو ماركتس للبيع' : 'SKU Markets Feature to Sell',
        arabic ? ' ميزة اس كي يو ماركتس للشراء' : 'SKU Markets Feature to Buy',
        arabic ? ' الميزات الأخرى الجاهزة' : 'Other Ready- Built Features',
      ],
      link: '/signup',
      active: true,
    },
    {
      plan: arabic ? 'باقة بي تو سي للمتاجر' : 'B2C Partner Store',
      title: arabic ? 'مخصصة لإدارة قنوات البيع' : 'Customized for sales channels Management',
      currency: `${getCrncy?.label ? getCrncy.label : defaultCurrency.label}`,
      price: `${Math.round(launchValue * (getCrncy?.rate || defaultCurrency?.rate))}`,
      qty: `${checked ? 12 : 1}`,
      subTitle: arabic
        ? 'عدد غير محدود من رموز التخزين التعريفية الخاصة بك'
        : 'Up to Unlimited Of Your SKUs',
      available: arabic ? 'عبر البلدان والفئات' : 'Cross Countries & Categories',
      description: [
        arabic ? 'أسواق بي تو بي +' : 'B2B Marketplace +',
        arabic ? ' قنوات مبيعات كاملة' : 'A complete Sales Channels',
        arabic ? ' حلول تسويقية كاملة' : 'A complete marketing solutions',
        arabic ? ' الميزات الأخرى الجاهزة' : 'Other Ready- Built Features',
      ],
      active: true,
      badge: arabic ? 'بيتا ' : 'Beta',
    },
    {
      plan: arabic ? 'باقة تحليل البيانات' : 'Data Analytics',
      title: arabic
        ? 'مثالي للمؤسسات الصغيرة والمتوسطة الحجم'
        : 'Ideal for small to medium-sized organizations',
      currency: `${getCrncy?.label ? getCrncy.label : defaultCurrency.label}`,
      price: `${Math.round(growValue * (getCrncy?.rate || defaultCurrency?.rate))}`,
      qty: `${checked ? 12 : 1}`,
      subTitle: arabic
        ? 'عدد غير محدود من رموز التخزين التعريفية الخاصة بك'
        : 'Up to Unlimited Of Your SKUs',
      available: arabic ? 'عبر البلدان والفئات' : 'Cross Countries & Categories',
      description: [
        arabic ? 'B2C متجر شريك +' : 'B2C Partner Store +',
        arabic ? ' أعلى رموز التخزين التعريفية مرتبة اليوم' : 'Top Ranked SKUs of Today',
        arabic ? ' التجارة المتوقعة vloume & SOH' : 'Expected Trade vloume & SOH',
        arabic ? ' الفرص والمنافسين' : 'Opportunities & Competitors',
      ],
      active: true,
    },
    {
      plan: arabic ? 'باقة عرض أعمالك لمنصات أخرى' : 'Portfolio For Other Platforms',
      title: arabic
        ? 'مخصصة لوحدات اس كي يو الخاصة بمؤسسة معينة'
        : 'Customized for specific organization SKUs',
      currency: `${getCrncy?.label ? getCrncy.label : defaultCurrency.label}`,
      price: `${Math.round(businessValue * (getCrncy?.rate || defaultCurrency?.rate))}`,
      qty: `${checked ? 12 : 1}`,
      subTitle: arabic
        ? 'عدد غير محدود من رموز التخزين التعريفية الخاصة بك'
        : 'Up to Unlimited Of Your SKUs',
      available: arabic ? 'عبر البلدان والفئات' : 'Cross Countries & Categories',
      description: [
        arabic ? ' خطة تحليل البيانات +' : 'Data Analytics Plan +',
        arabic ? ' محفظة لمنصات أخرى' : 'Portfolio for other platforms',
        arabic ? ' تتبع وتنبيه اس كي يوز' : 'Track & Alert SKUs',
        arabic ? 'معرض مجمع لأعمالك وتنبيهات' : 'Bulk Portfolio & Alerts Import',
      ],
      active: true,
    },
    {
      plan: arabic ? 'باقة لأتمتة المهام الخاصة بك' : 'Automate Your Tasks',
      title: arabic
        ? 'مصممة لتفعيل الأتمتة - الحلول'
        : 'Designed to activate automation - solutions',
      currency: `${getCrncy?.label ? getCrncy.label : defaultCurrency.label}`,
      price: `${Math.round(professionalValue * (getCrncy?.rate || defaultCurrency?.rate))}`,
      qty: `${checked ? 12 : 1}`,
      subTitle: arabic
        ? 'عدد غير محدود من رموز التخزين التعريفية الخاصة بك'
        : 'Up to Unlimited Of Your SKUs',
      available: arabic ? 'عبر البلدان والفئات' : 'Cross Countries & Categories',
      description: [
        arabic ? ' محفظة لمنصات أخرى +' : 'Portfolio For Other Platforms +',
        arabic
          ? ' منصات التجارة الإلكترونية، شحنات الشحن والخدمات اللوجستية ودمج عربات التسوق'
          : 'Ecommerce Platforms, shipping and Logistics couriers & Shopping Carts Integration',
        arabic ? ' أتمتة الروبوتات' : 'Bots automation',
      ],
      active: false,
      badge: arabic ? 'قريبًا' : 'Soon',
    },
    {
      plan: arabic ? 'باقة إدارة الفريق' : 'Team Management',
      title: arabic
        ? 'مصممة للمؤسسات ذات الحجم الأكبر'
        : 'Designed for higher volumes organizations',
      currency: `${getCrncy?.label ? getCrncy.label : defaultCurrency.label}`,
      price: `${Math.round(teamValue * (getCrncy?.rate || defaultCurrency?.rate))}`,
      qty: `${checked ? 12 : 1}`,
      subTitle: arabic
        ? 'عدد غير محدود من رموز التخزين التعريفية الخاصة بك'
        : 'Up to Unlimited Of Your SKUs',
      available: arabic ? 'عبر البلدان والفئات' : 'Cross Countries & Categories',
      description: [
        arabic ? ' أتمتة خطة المهام الخاصة بك +' : 'Automate Your Tasks Plan +',
        arabic
          ? ' 1/7 مدير حساب متخصص في التجارة الإلكترونية لدعم عملك'
          : '1/7 Ecommerce Specialist Account Manager to Support your Business',
      ],
      active: false,
      badge: arabic ? 'قريبًا' : 'Soon',
    },
  ];

  const dispatch = useDispatch();

  const handlePlan = (plan) => {
    dispatch(selectPlan(plan));
    navigate(plan?.link ? plan.link : '/finance');
  };

  return (
    <>
      <Grid container spacing={2} sx={{ marginY: '40px', justifyContent: 'center' }}>
        {PRICING_PLAN?.map((plan) => (
          <Grid key={plan.plan} item lg={2} md={4} xs={12}>
            <Paper
              elevation={2}
              sx={{
                padding: '20px',
                borderRadius: '12px',
                height: '400px',
                position: 'relative',
              }}
            >
              {plan?.badge && (
                <div style={{ position: 'absolute', top: '0px', right: '0px' }}>
                  <CustomBadge text={plan.badge} />
                </div>
              )}
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: '#0d6efd',
                    fontWeight: '600',
                    marginY: '20px',
                  }}
                  component="p"
                >
                  {plan.plan}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography sx={{ fontSize: '10px' }} component="p">
                    {plan.title}
                  </Typography>
                </div>
                <Typography
                  sx={{ fontSize: '17px', color: 'text.main', marginTop: '10px' }}
                  variant="h6"
                  component="h6"
                >
                  {plan.currency} {plan.price}/mo
                </Typography>
                <p
                  style={{
                    fontSize: '10px',
                    color: '#0d6efd',
                  }}
                >
                  {arabic
                    ? '+ 5٪ رسوم البيع لجميع الفئات'
                    : '+5% Selling Fees cross all Categories'}
                </p>
                <button
                  disabled={!plan?.active}
                  onClick={() => handlePlan(plan)}
                  style={{ cursor: 'pointer' }}
                  className={style.payment_btn_Style}
                >
                  {arabic ? 'ابدأ الآن' : 'GET STARTED NOW'}
                </button>
                <p
                  style={{
                    fontSize: '10px',
                    color: '#0d6efd',
                  }}
                >
                  {arabic ? 'رسوم إعلانات سي بي سي ' : '+ Ads fees CPC'}
                </p>
                <Typography
                  sx={{
                    fontSize: '11px',
                    color: 'tect.main',
                    fontWeight: '600',
                  }}
                  component="p"
                >
                  {plan.subTitle}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '11px',
                    color: 'text.main',
                    fontWeight: '600',
                  }}
                  component="p"
                >
                  {plan.available}
                </Typography>
                <Box>
                  <ul
                    style={{
                      textAlign: 'center',
                      fontSize: '10px',
                      listStyle: 'none',
                      paddingLeft: '0',
                    }}
                  >
                    {plan.description?.map((desc, i) => (
                      <li
                        key={i}
                        style={{
                          marginTop: '10px',
                          marginBottom: '10px',
                          color: 'text.main',
                        }}
                      >
                        <AiOutlineCheckCircle style={{ color: '#0d6efd' }} /> {desc}
                      </li>
                    ))}
                  </ul>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PricingPlan;
