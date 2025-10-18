import type { Product } from './product.interface';

export interface Panel {
  name: string;
  callories: number;
  productList: Array<Product>;
  color: 'green' | 'red';
}
