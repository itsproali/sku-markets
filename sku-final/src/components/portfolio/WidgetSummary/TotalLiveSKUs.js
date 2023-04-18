import AppWidgetSummary from 'components/common/AppWidgetSummary';

const TotalLiveSKUs = () => {
  return (
    <AppWidgetSummary
      title="Total Live SKUs"
      percent={-0.1}
      total={678}
      chart={{
        colors: ['#F76F72'],
        series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
      }}
    />
  );
};

export default TotalLiveSKUs;
