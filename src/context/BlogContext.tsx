import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { BlogContextType, defaultBlogContext, Product } from "../types/BlogTypes";
import {BACKEND_URL} from "../config/config"
const BlogContext = createContext<BlogContextType>(defaultBlogContext);

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);



  const fetchProducts = async () => {
    setLoading(false);
    try {
      const { data }: { data: any } = await axios.get(`${BACKEND_URL}/product`);
      setProducts(data.products);
      console.log(data)
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <BlogContext.Provider value={{ products, loading }}>
      {children}
    </BlogContext.Provider>
  );
};




























export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};