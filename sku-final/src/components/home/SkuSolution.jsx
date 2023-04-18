import Grid from '@mui/material/Grid/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import fee from '../../assets/images/fee.png';
import Growth from '../../assets/images/growth-icon.png';
import lowPrice from '../../assets/images/low-price.png';
import privacy from '../../assets/images/privacy.png';
import scale from '../../assets/images/scale.png';
import security from '../../assets/images/security.png';

const SkuSolution = ({ arabic }) => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ marginY: '40px', textAlign: 'center' }} component="h4">
        {arabic ? 'لماذا تختار منصة اس كي يو ماركتس؟' : ' Why SKU Markets Solution'}
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <img
                src={Growth}
                alt=""
                style={{
                  marginLeft: arabic ? '50px' : '10px',
                  marginRight: arabic ? '10px' : '50px',
                }}
                width={35}
                height={35}
              />
            </div>
            <div>
              <h4 style={{ marginTop: '0', marginBottom: '5px', color: 'text.main' }}>
                {arabic ? 'زيادة  مبيعاتك وإيراداتك' : 'Increase Sales & Revenue'}
              </h4>
              <p style={{ marginTop: '0', textAlign: 'justify' }}>
                {arabic
                  ? 'وفر 90٪ من الوقت في البحث عن العروض في العديد من الأسواق، وتحقق من الفرص الجديدة لتوسيع اختياراتك وإعداد وحدات تخزين جديدة، بأكثر من عشر مرات أفضل من منافسيك، لتحقيق مبيعات عالية من خلال إخطار واتس آب لك بالأسعار وتغيير المخزون يومًا بيوم.'
                  : 'Save 90% of the time searching for offers in the MarketPlaces to check for new opportunities to expand your selection, preparing your new SKUs 10X of your competitors to achieve high sales by also notifying your whatsApp on prices and stock changing as of today.'}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item lg={6}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <img
                src={lowPrice}
                alt=""
                style={{
                  marginLeft: arabic ? '50px' : '10px',
                  marginRight: arabic ? '10px' : '50px',
                }}
                width={35}
                height={35}
              />
            </div>
            <div>
              <h4 style={{ marginTop: '0', marginBottom: '5px', color: 'text.main' }}>
                {arabic ? 'تقليل تكاليف التشغيل' : 'Reduce Operational Costs'}
              </h4>
              <p style={{ marginTop: '0', textAlign: 'justify' }}>
                {arabic
                  ? 'يمكن إكمال المهمة بتكلفة تشغيلية أقل من خلال إظهار وحدات اس كي يو التي لديها الفرص دون إضاعة وقت موظفيك، وبالتالي إمكانية العمل بشكل أكثر كفاءة وإنتاجية بمجرد النظر إلى المصادر الجيدة!'
                  : 'The job could be completed at the lower operational cost by showing you which SKUs has the opportunities without wasting your employees time and they can work more efficiently and productivity by just looking to the good sources!'}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item lg={6}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <img
                src={scale}
                alt=""
                style={{
                  marginLeft: arabic ? '50px' : '10px',
                  marginRight: arabic ? '10px' : '50px',
                }}
                width={35}
                height={35}
              />
            </div>
            <div>
              <h4 style={{ marginTop: '0', marginBottom: '5px', color: 'text.main' }}>
                {arabic ? 'وسَع نطاق عملك' : 'Scale Your Business'}
              </h4>
              <p style={{ marginTop: '0', textAlign: 'justify' }}>
                {arabic
                  ? 'تساعدك منصة اس كي يو ماركتس على توسيع نطاق عملك من خلال توسيع نطاق اختيارك بسهولة، حيث يمكننا بالفعل تحليل وحدات SKU الأكثر مبيعًا والاتجاه ، وذلك من خلال تتبع أي وحدات اس كي يو محتملة للحصول عليها بسهولة!'
                  : 'The SKU Markets system helps you to scale your business by expanding your selection easily as we already can analyse the top selling and trending SKUs as we also hunting any potential SKUs to grab it to you easily!'}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item lg={6}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <img
                src={security}
                alt=""
                style={{
                  marginLeft: arabic ? '50px' : '10px',
                  marginRight: arabic ? '10px' : '50px',
                }}
                width={35}
                height={35}
              />
            </div>
            <div>
              <h4 style={{ marginTop: '0', marginBottom: '5px', color: 'text.main' }}>
                {arabic ? 'تعزيز معايير الأمان ' : 'Enhanced security standards'}
              </h4>
              <p style={{ marginTop: '0', textAlign: 'justify' }}>
                {arabic
                  ? 'قامت منصة اس كي يو ماركتس بجميع الخطوات اللازمة لتأمين مفاتيح وصول المستخدمين وبيانات الاعتماد من خلال تطبيق معايير أمان على مستوى المؤسسة.'
                  : 'SKU Markets has done all necessary steps to secure users access keys and credentials data by applying enterprise-grade security standards.'}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item lg={6}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <img
                src={fee}
                alt=""
                style={{
                  marginLeft: arabic ? '50px' : '10px',
                  marginRight: arabic ? '10px' : '50px',
                }}
                width={35}
                height={35}
              />
            </div>
            <div>
              <h4 style={{ marginTop: '0', marginBottom: '5px', color: 'text.main' }}>
                {arabic ? 'توفير تكاليف' : "Also it's SKU markets!"}
              </h4>
              <p style={{ marginTop: '0', textAlign: 'justify' }}>
                {arabic
                  ? 'منصتنا ليست مجرد مكان يمكنك من خلاله إدارة قنوات المبيعات الخاصة بك ، بل إنها منصة بيع أيضًا يمكنك من خلالها زيادة مبيعاتك بالجملة'
                  : "It's not just a place where you can manage your sales channels, it's also a selling platform where you can increase your wholesales"}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item lg={6}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <img
                src={privacy}
                alt=""
                style={{
                  marginLeft: arabic ? '50px' : '10px',
                  marginRight: arabic ? '10px' : '50px',
                }}
                width={35}
                height={35}
              />
            </div>
            <div>
              <h4 style={{ marginTop: '0', marginBottom: '5px', color: 'text.main' }}>
                {arabic ? 'نحترم الخصوصي' : 'We Rspect privacy'}
              </h4>
              <p style={{ marginTop: '0', textAlign: 'justify' }}>
                {arabic
                  ? 'لا تشارك اس كي يو ماركتس بيانات المستخدم الشخصية مع أطراف ثالثة أو البيانات المرتبطة بنشاط المستخدم.'
                  : 'SKU Markets Does not share personal user’s data with third parties or data associated with user’s activity.'}
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkuSolution;
