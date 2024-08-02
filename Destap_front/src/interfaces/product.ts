export interface IProduct {
  src: string;
  id: string;
  name: string;
  subName?: string;
  description: string;
  price: number;
  quantity?: number;
}