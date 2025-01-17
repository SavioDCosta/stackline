export interface Product {
  title: string;
  image: string;
  subtitle: string;
  tags: string[];
  sales: WeeklySales[];
}

export interface WeeklySales {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export interface ProductState {
  data: any[];
  error: string | undefined;
  loading: boolean;
}

export function createProduct(productData: any): Product {
  return {
    title: productData["title"],
    image: productData["image"],
    subtitle: productData["subtitle"],
    tags: productData["tags"],
    sales: productData["sales"],
  };
}
