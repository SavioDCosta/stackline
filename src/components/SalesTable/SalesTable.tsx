import React, { useState } from "react";
import "./SalesTable.css";
import { Sale } from "../../types";

interface SalesTableProps {
  salesData: Sale[];
}

type SortKey = keyof Sale;

const SalesTable: React.FC<SalesTableProps> = ({ salesData }) => {
  const [sortKey, setSortKey] = useState<SortKey>("weekEnding");
  const [isAscending, setIsAscending] = useState<boolean>(true);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setIsAscending(!isAscending);
    } else {
      setSortKey(key);
      setIsAscending(true);
    }
  };

  const sortedData = [...salesData].sort((a, b) => {
    let valA: number | string = a[sortKey];
    let valB: number | string = b[sortKey];

    if (sortKey === "weekEnding") {
      valA = a.weekEnding;
      valB = b.weekEnding;
    }

    if (
      sortKey !== "weekEnding" &&
      typeof valA === "string" &&
      typeof valB === "string"
    ) {
      valA = Number(valA);
      valB = Number(valB);
    }

    if (valA < valB) return isAscending ? -1 : 1;
    if (valA > valB) return isAscending ? 1 : -1;
    return 0;
  });

  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="table-container">
      <table className="sales-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("weekEnding")}>
              Week Ending
              {sortKey === "weekEnding" && (
                <span className="sort-icon">{isAscending ? "▲" : "▼"}</span>
              )}
            </th>
            <th onClick={() => handleSort("retailSales")}>
              Retail Sales
              {sortKey === "retailSales" && (
                <span className="sort-icon">{isAscending ? "▲" : "▼"}</span>
              )}
            </th>
            <th onClick={() => handleSort("wholesaleSales")}>
              Wholesale Sales
              {sortKey === "wholesaleSales" && (
                <span className="sort-icon">{isAscending ? "▲" : "▼"}</span>
              )}
            </th>
            <th onClick={() => handleSort("unitsSold")}>
              Units Sold
              {sortKey === "unitsSold" && (
                <span className="sort-icon">{isAscending ? "▲" : "▼"}</span>
              )}
            </th>
            <th onClick={() => handleSort("retailerMargin")}>
              Retailer Margin
              {sortKey === "retailerMargin" && (
                <span className="sort-icon">{isAscending ? "▲" : "▼"}</span>
              )}
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedData.map((sale) => (
            <tr key={sale.weekEnding}>
              <td>{sale.weekEnding}</td>
              <td>{formatCurrency(sale.retailSales)}</td>
              <td>{formatCurrency(sale.wholesaleSales)}</td>
              <td>{sale.unitsSold}</td>
              <td>{formatCurrency(sale.retailerMargin)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
