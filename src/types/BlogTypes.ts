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
};

export const defaultBlogContext: BlogContextType = {
  products: [],
  loading: false,

};