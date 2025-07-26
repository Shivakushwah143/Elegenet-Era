// // import { useState } from "react";

// // type ProductFormData = {
// //   title: string;
// //   image: string;
// //   price: string;
// //   description: string;
// //   colour: string;
// //   size: string[];
// // };

// // export default function CreateProduct() {
// //   const [formData, setFormData] = useState<ProductFormData>({
// //     title: "",
// //     image: "",
// //     price: "",
// //     description: "",
// //     colour: "",
// //     size: []
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const sizes = ["XS", "S", "M", "L", "XL"] as const;

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //   };

// //   const handleSizeToggle = (size: string) => {
// //     setFormData(prev => ({
// //       ...prev,
// //       size: prev.size.includes(size)
// //         ? prev.size.filter(s => s !== size)
// //         : [...prev.size, size]
// //     }));
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       const response = await fetch("http://localhost:5000/api/v1/product", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: "Bearer " + localStorage.getItem("token"),
// //         },
// //         body: JSON.stringify({
// //           ...formData,
// //           price: Number(formData.price)
// //         }),
// //       });

// //       const data = await response.json();
// //       console.log(data);
// //       alert("Product added!");
      
    
// //       setFormData({
// //         title: "",
// //         image: "",
// //         price: "",
// //         description: "",
// //         colour: "",
// //         size: []
// //       });

// //     } catch (error) {
// //       console.error("Error:", error);
// //       alert("Error adding product");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
// //       <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div className="space-y-1">
// //           <label className="block text-sm font-medium text-gray-700">Title</label>
// //           <input
// //             type="text"
// //             name="title"
// //             value={formData.title}
// //             onChange={handleChange}
// //             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //             required
// //           />
// //         </div>

// //         <div className="space-y-1">
// //           <label className="block text-sm font-medium text-gray-700">Description</label>
// //           <textarea
// //             name="description"
// //             value={formData.description}
// //             onChange={handleChange}
// //             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //             rows={3}
// //             required
// //           />
// //         </div>

// //         <div className="space-y-1">
// //           <label className="block text-sm font-medium text-gray-700">Image URL</label>
// //           <input
// //             type="text"
// //             name="image"
// //             value={formData.image}
// //             onChange={handleChange}
// //             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //             required
// //           />
// //         </div>

// //         <div className="space-y-1">
// //           <label className="block text-sm font-medium text-gray-700">Price</label>
// //           <input
// //             type="number"
// //             name="price"
// //             value={formData.price}
// //             onChange={handleChange}
// //             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //             required
// //           />
// //         </div>

// //         <div className="space-y-1">
// //           <label className="block text-sm font-medium text-gray-700">Colour</label>
// //           <input
// //             type="text"
// //             name="colour"
// //             value={formData.colour}
// //             onChange={handleChange}
// //             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //             required
// //           />
// //         </div>

// //         <div className="space-y-2">
// //           <label className="block text-sm font-medium text-gray-700">Sizes</label>
// //           <div className="flex flex-wrap gap-3">
// //             {sizes.map(size => (
// //               <label key={size} className="inline-flex items-center">
// //                 <input
// //                   type="checkbox"
// //                   checked={formData.size.includes(size)}
// //                   onChange={() => handleSizeToggle(size)}
// //                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
// //                 />
// //                 <span className="ml-2 text-gray-700">{size}</span>
// //               </label>
// //             ))}
// //           </div>
// //         </div>

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
// //         >
// //           {loading ? (
// //             <>
// //               <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// //                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //               </svg>
// //               Saving...
// //             </>
// //           ) : "Save Product"}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }



// import { useState } from "react";

// type ProductFormData = {
//   title: string;
//   image: string;
//   price: string;
//   description: string;
//   colour: string;
//   size: string[];
// };

// export default function CreateProduct() {
//   const [formData, setFormData] = useState<ProductFormData>({
//     title: "",
//     image: "",
//     price: "",
//     description: "",
//     colour: "",
//     size: []
//   });
//   const [loading, setLoading] = useState(false);
//   const sizes = ["XS", "S", "M", "L", "XL"] as const;

//   const handleSizeToggle = (size: string) => {
//     setFormData(prev => ({
//       ...prev,
//       size: prev.size.includes(size)
//         ? prev.size.filter(s => s !== size)
//         : [...prev.size, size]
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/v1/product", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//         body: JSON.stringify({
//           ...formData,
//           price: Number(formData.price)
//         }),
//       });

//       const data = await response.json();
//       console.log(data);
//       alert("Product added!");
      
//       setFormData({
//         title: "",
//         image: "",
//         price: "",
//         description: "",
//         colour: "",
//         size: []
//       });

//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error adding product");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-700">Title</label>
//           <input
//             type="text"
//             value={formData.title}
//             onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea
//             value={formData.description}
//             onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             rows={3}
//             required
//           />
//         </div>

//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-700">Image URL</label>
//           <input
//             type="text"
//             value={formData.image}
//             onChange={e => setFormData(prev => ({ ...prev, image: e.target.value }))}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-700">Price</label>
//           <input
//             type="number"
//             value={formData.price}
//             onChange={e => setFormData(prev => ({ ...prev, price: e.target.value }))}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-700">Colour</label>
//           <input
//             type="text"
//             value={formData.colour}
//             onChange={e => setFormData(prev => ({ ...prev, colour: e.target.value }))}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700">Sizes</label>
//           <div className="flex flex-wrap gap-3">
//             {sizes.map(size => (
//               <label key={size} className="inline-flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={formData.size.includes(size)}
//                   onChange={() => handleSizeToggle(size)}
//                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                 />
//                 <span className="ml-2 text-gray-700">{size}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {loading ? (
//             <>
//               <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Saving...
//             </>
//           ) : "Save Product"}
//         </button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [colour, setColour] = useState("");
  const [sizes, setSizes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  
  const availableSizes = ["XS", "S", "M", "L", "XL"] as const;

const handleSizeToggle = (size: string) => {
  const newSizes = sizes.includes(size)
    ? sizes.filter(s => s !== size) 
    : [...sizes, size];             
  setSizes(newSizes);
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/v1/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          title,
          description,
          image,
          price: Number(price),
          colour,
          size: sizes
        }),
      });

      const data = await response.json();
      console.log(data);
      alert("Product added!");
      
      // Reset all fields
      setTitle("");
      setImage("");
      setPrice("");
      setDescription("");
      setColour("");
      setSizes([]);

    } catch (error) {
      console.error("Error:", error);
      alert("Error adding product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-blue-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm "
            rows={3}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={e => setImage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm "
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm "
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Colour</label>
          <input
            type="text"
            value={colour}
            onChange={e => setColour(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Sizes</label>
          <div className="flex flex-wrap gap-3">
            {availableSizes.map(size => (
              <label key={size} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={sizes.includes(size)}
                  onChange={() => handleSizeToggle(size)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">{size}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2 px-4  rounded-md shadow-sm text-sm font-medium text-white  disabled:opacity-50 disabled:cursor-not-allowed bg-purple-400"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Saving...
            </>
          ) : "Save Product"}
        </button>
      </form>
    </div>
  );
}