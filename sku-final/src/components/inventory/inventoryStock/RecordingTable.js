import { Box, Card, CardHeader, Typography } from '@mui/material';
import RecordingDataGrid from './RecordingDataGrid';

const RecordingTable = () => {
  /*  const { brand } = useParams();
  const query = `limit=5&brand_en=${brand}&page=1&sort=-sku_rate&fields=sku,brand_en,category_en,all_images,sku_rate,sku_rtv,number_of_sellers,sku_marketplace,is_live,buy_box_sku_fulfillment_type,current_price,price_change,trade_value,tags,estimated_rMaxQTY,maxIn_investment,minIn_investment,rMinQTY,sold_24_hours,est_market_cap,drMaxQTYand_percentage,supply_percentage`;

  const { data } = useGetAllProductsQuery(query); */

  //   console.log(data);

  return (
    <>
      <Card sx={{ mt: 3 }}>
        <CardHeader title="Reordering Stock Rules" sx={{ mb: 1.5 }} />
        <Box sx={{ height: 470 }}>
          <RecordingDataGrid data={[]} />
        </Box>
      </Card>

      <Typography variant="caption">
        Designed for users to instantly see the market situations on the marketplaces and predicts
        what will come next.
      </Typography>
    </>
  );
};

export default RecordingTable;
