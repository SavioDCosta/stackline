import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {
  getMonthlySales,
  getTrendOptions,
  setHighChartsOptions,
} from "../../utils/trend";
import { Sale } from "../../types";

interface SalesChartProps {
  salesData: Sale[];
}

const SalesChart: React.FC<SalesChartProps> = ({ salesData }) => {
  const monthly = getMonthlySales(salesData);
  setHighChartsOptions();
  const options = getTrendOptions(monthly);

  return (
    <div className="sales-chart-container">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default SalesChart;
