export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number | null;
  rating: number;
  stock: number;
  brand: string;
  category_id: number;
  thumbnail: string;
  images: string[];
  quantity: number;
}
