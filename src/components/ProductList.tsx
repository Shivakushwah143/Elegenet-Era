
import { useBlog } from '../context/BlogContext';

export default function ProductList() {
  const { products, } = useBlog();

  return (
    <div className="product-list">
    
      {
        <div className="products-container flex justify-between gap-10">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-48 "
              />
              <h3>{product.title}</h3>
              <p className="description">{product.description}</p>

            </div>
          ))}
        </div>
      }
    </div>
  );
}