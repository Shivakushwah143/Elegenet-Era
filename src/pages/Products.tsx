// import { useBlog } from '../context/BlogContext';
// import { ProductCard } from './ProductCard';
// import axios from 'axios';
// import { EditProductModal } from './EditProductModal';
// import { Product } from '../types/BlogTypes';
// import { useState } from 'react';

// const Products = () => {
//   const { products, loading ,setProducts} = useBlog();

//   const [editingProduct, setEditingProduct] = useState<Product | null>(null);

//   const handleEdit = async (updatedProduct: Product) => {
//     try {
//       await axios.put(`http://localhost:5000/api/v1/product/${updatedProduct._id}`, 
//         updatedProduct,
//         {
//           headers: { Authorization: "Bearer " + localStorage.getItem("token") }
//         }
//       );
//       // Update local state directly
//       setProducts(products.map(p => 
//         p._id === updatedProduct._id ? updatedProduct : p
//       ));
//     } catch (err) {
//       console.error("Update failed:", err);
//     }
//   };
//   if (loading) {
//     return <div>Loading products...</div>;
//   }

//   if (!products.length) {
//     return <div>No products found</div>;
//   }

//   return (
//     <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
//       {products.map((product) => (
//         <ProductCard
//           key={product._id}
//           productId={product._id}
//           title={product.title}
//           price={product.price.toString()}
//           imageUrl={product.image}
//           onEdit={() =>handleEdit}
//           onDelete={async () => {
//             try {
//               await axios.delete(`http://localhost:5000/api/v1/product/${product._id}`, {
//                 headers: {
//                   Authorization: "Bearer " + localStorage.getItem("token"),
//                 },
//               });
//             } catch (err) {
//               console.error("Delete failed:", err);
//             }
//           }}
//         />

//       ))}
//     </div>
//   );
// };

// export default Products;
// // import { useBlog } from '../context/BlogContext';
// // import { ProductCard } from './ProductCard';
// // import axios from 'axios';
// // import { EditProductModal } from './EditProductModal';

// // const Products = () => {
// //   const { products, loading } = useBlog();

// //   if (loading) {
// //     return <div>Loading products...</div>;
// //   }

// //   if (!products.length) {
// //     return <div>No products found</div>;
// //   }

// //   return (
// //     <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
// //       {products.map((product) => (
// //         <ProductCard
// //           key={product._id}
// //           productId={product._id}
// //           title={product.title}
// //           price={product.price.toString()}
// //           imageUrl={product.image}
// //           onEdit={() => console.log('Edit clicked', product._id)}
// //           onDelete={async () => {
// //             try {
// //               await axios.delete(`http://localhost:5000/api/v1/product/${product._id}`, {
// //                 headers: {
// //                   Authorization: "Bearer " + localStorage.getItem("token"),
// //                 },
// //               });
// //             } catch (err) {
// //               console.error("Delete failed:", err);
// //             }
// //           }}
// //         />

// //       ))}
// //     </div>
// //   );
// // };

// // export default Products;


import { useBlog } from '../context/BlogContext';
import { ProductCard } from './ProductCard';
import axios from 'axios';
import { EditProductModal } from './EditProductModal';
import { Product } from '../types/BlogTypes';
import { useState } from 'react';
import Loading from './Loading';

const Products = () => {
  const { products, loading, setProducts } = useBlog();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleEditClick = (productId: string) => {
    const productToEdit = products.find(p => p._id === productId);
    if (productToEdit) {
      setEditingProduct(productToEdit);
    }
  };

  const handleEditSubmit = async (updatedProduct: Product) => {
    try {
      await axios.put(
        `http://localhost:5000/api/v1/product/${updatedProduct._id}`,
        updatedProduct,
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        }
      );
      setProducts(products.map(p => 
        p._id === updatedProduct._id ? updatedProduct : p
      ));
      setEditingProduct(null); // Close the modal after successful edit
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const handleDelete = async (productId: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/product/${productId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      setProducts(products.filter(p => p._id !== productId));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  if (loading) {
    return <div><Loading/></div>;
  }

  if (!products.length) {
    return <div>No products found</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            productId={product._id}
            title={product.title}
            price={product.price.toString()}
            imageUrl={product.image}
            onEdit={() => handleEditClick(product._id)} // Fixed: Pass product ID
            onDelete={() => handleDelete(product._id)} // Simplified delete handler
          />
        ))}
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={handleEditSubmit}
        />
      )}
    </>
  );
};

export default Products;