import { useState } from 'react';
import CreateProduct from '../pages/CreateProduct';
import Products from '../pages/Products';
import Aunalytics from './Aunalytics';
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'add' | 'products' | 'Aunalytics'>('add');

  return (
    <div className="p-4">
      <div className="flex border-b border-gray-200">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'add' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 '}`}
          onClick={() => setActiveTab('add')}
        >
          Add Product
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'products' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 '}`}
          onClick={() => setActiveTab('products')}
        >
          Products
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'Aunalytics' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('Aunalytics')}
        >
          Aunalytics
        </button>
      </div>

      <div className="mt-4">
        {activeTab === 'add' && <CreateProduct />}
        {activeTab === 'products' && <Products />}
        {activeTab === 'Aunalytics' && <Aunalytics />}
      </div>
    </div>
  );
};

export default Dashboard