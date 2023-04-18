import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import Iconify from 'components/iconify/Iconify';
// import { useRouter } from "next/router";
import React from 'react';
import { AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import style from './styles/Home.module.css';

const FAQS = [
  {
    id: 1,
    heading: 'How dose our service work?',
    headingAr: 'كيف تعمل خدمتنا؟',
    detail:
      'We do collecting data cross internet, calculating and reflecting it to your dashboard. Weareable to provide with top needed information to take the right business decisions on the fastest way!',
    detailAr:
      'في اس كي يو ماركتس نقوم بجمع البيانات عبر الإنترنت لتنعكس على لوحة التحكم الخاصة بك. منصتنا قابلة للارتداد لتوفير أعلى معلومات مطلوبة لاتخاذ قرارات العمل الصحيحة بأسرع طريقة!',
  },
  {
    id: 2,
    heading: 'Do you provide your services for my specific SKUs?',
    headingAr: 'هل تقدمون خدماتكم لوحدات اس كي يو الخاصة بي؟',
    detail:
      'Yes we do please you just need to prepare your SKUs list and upload it to your account or contact our support team and they will help easily',
    detailAr:
      'نعم نحن نقوم بذلك ، فأنت تحتاج فقط إلى إعداد قائمة اس كي يو الخاصة بك وتحميلها إلى حسابك أو الاتصال بفريق الدعم لدينا وسوف يساعدونك بسهولة',
  },
  {
    id: 3,
    heading: 'Which payment methods are accepted?',
    headingAr: 'ماهي وسائل الدفع المقبولة لديكم؟',
    detail:
      'We accept all major credit cards and payments. You can also choose to checkout with Apple Pay. We will do our best to add new payment methods in the future.',
    detailAr:
      'نقبل جميع بطاقات الائتمان والمدفوعات الرئيسية. يمكنك أيضًا اختيار الدفع باستخدام آبل باي. نبذل قصارى جهدنا لإضافة طرق دفع جديدة في المستقبل.',
  },
  {
    id: 4,
    heading: 'What is your Refund Policy?',
    headingAr: 'ماهي سياسة الاسترداد الخاصة بكم؟',
    detail:
      'Any plans that has yet to go live is eligible for a complete refund. Plans that have already begun cannot be canceled because you have had access to our digital content. If this is a concern for you, we recommend to avoid using our platform.',
    detailAr:
      'أي خطط لم يتم تفعيلها بعد مؤهلة لاسترداد الأموال بالكامل. لا يمكن إلغاء الخطط التي بدأت بالفعل لأن لديك حق الوصول إلى المحتوى الرقمي الخاص بنا. إذا كان هذا مصدر قلق لك ، فإننا نوصي بتجنب استخدام منصتنا. ',
  },
  {
    id: 5,
    heading: 'Are there any rules I should follow when ordering?',
    headingAr: 'هل هناك أي قواعد يمكن اتباعها عند الطلب؟',
    detail: 'Just choose your plan and follow the system instructions!',
    detailAr: 'فقط اختر خطتك واتبع تعليمات النظام!',
  },
  {
    id: 6,
    heading: 'How can I cancel my subscription?',
    headingAr: 'كيف يمكنني إلغاء اشتراكي؟',
    detail:
      'From within your billing dashboard, you can cancel all your subscriptions. When you place an order, your billing account is created instantly and you will receive an email with your login details.',
    detailAr:
      'من داخل لوحة معلومات الفوترة ، يمكنك إلغاء جميع اشتراكاتك. عند تقديم طلب ، يتم إنشاء حساب الفواتير الخاص بك على الفور وستتلقى رسالة بريد إلكتروني تحتوي على تفاصيل تسجيل الدخول الخاصة بك.',
  },
];

const FAQSection = ({ arabic }) => {
  // const router = useRouter();
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id="FAQSection">
      <Container sx={{ my: 15 }}>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h4">
            {arabic ? 'تعرف على كيفية الدمج' : 'Frequently Asked Questions'}
          </Typography>
          <Typography component="h4">
            {arabic
              ? 'إذا لم تتمكن من العثور على إجابة لسؤالك هنا ، فلا تتردد في التواصل مع فريق الدعم.'
              : 'If you can’t find the answer to your question here, feel free to contact our support team.'}
          </Typography>

          <Box sx={{ my: 3, display: 'flex', justifyContent: 'center' }}>
            <a
              style={{ textDecoration: 'none' }}
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              className={style.faqbtnMail}
            >
              <AiOutlineMail />{' '}
              {arabic ? 'أرسل سؤالك عبر البريد الإلكتروني' : 'EMAIL US YOUR QUESTION'}
            </a>
            <a
              href="https://twitter.com/SKUmarkets"
              className={style.faqbtnTwieet}
              style={{ textDecoration: 'none' }}
            >
              <AiOutlineTwitter /> {arabic ? 'أرسل لنا على تويتر' : 'SEND US A TWEET'}
            </a>
          </Box>
        </div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            {FAQS.slice(0, 3).map((accordion) => (
              <Accordion
                key={accordion.id}
                expanded={expanded === accordion.id}
                onChange={handleChange(accordion.id)}
              >
                <AccordionSummary
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}
                >
                  <Typography variant="subtitle1">
                    {arabic ? accordion.headingAr : accordion.heading}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>{arabic ? accordion.detailAr : accordion.detail}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            {FAQS.slice(3, 6).map((accordion) => (
              <Accordion
                key={accordion.id}
                expanded={expanded === accordion.id}
                onChange={handleChange(accordion.id)}
              >
                <AccordionSummary
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}
                >
                  <Typography variant="subtitle1">
                    {arabic ? accordion.headingAr : accordion.heading}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>{arabic ? accordion.detailAr : accordion.detail}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FAQSection;
