export const COLUMNS = [
  {
    Header: "Week Ending",
    accessor: "weekEnding",
  },
  {
    Header: "Retail Sales",
    accessor: "retailSales",
    Cell: ({ value }: { value: number }) => currency.format(value),
  },
  {
    Header: "Wholesale Sales",
    accessor: "wholesaleSales",
    Cell: ({ value }: { value: number }) => currency.format(value),
  },
  {
    Header: "Units Sold",
    accessor: "unitsSold",
  },
  {
    Header: "Retailer Margin",
    accessor: "retailerMargin",
    Cell: ({ value }: { value: number }) => currency.format(value),
  },
];

const currency = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});
