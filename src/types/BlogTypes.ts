 export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  colour: string;
  size: string[];
  _id: string
};

 export type BlogContextType = {
  products: Product[];
  loading: boolean;
   setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  fetchProducts?: () => Promise<void>
};

export const defaultBlogContext: BlogContextType = {
  products: [],
  loading: false,
 
};