
import { useBlog } from '../context/BlogContext';
import Card from '../components/ui/Card';
import { BarChart, PieChart } from '../components/ui/Charts'; // You'll create these


const AnalyticsPage = () => {
  const { products } = useBlog();
  

  const totalProducts = products.length;
  const totalValue = products.reduce((sum, product) => sum + product.price, 0);
  const avgPrice = totalProducts > 0 ? totalValue / totalProducts : 0;
  
  // Get top 5 viewed products (fallback to most expensive if views not available)
  const popularProducts = [...products]
    .sort((a, b) => (b.views || b.price) - (a.views || a.price))
    .slice(0, 5);

  // Mock sales data (replace with real API calls)
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [65, 59, 80, 81, 56, 72]
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Analytics</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <Card.Header>
            <Card.Title>Total Products</Card.Title>
          </Card.Header>
          <Card.Content className="text-3xl font-bold">
            {totalProducts}
          </Card.Content>
        </Card>
        
        <Card>
          <Card.Header>
            <Card.Title>Inventory Value</Card.Title>
          </Card.Header>
          <Card.Content className="text-3xl font-bold">
            ${totalValue.toLocaleString()}
          </Card.Content>
        </Card>
        
        <Card>
          <Card.Header>
            <Card.Title>Avg. Price</Card.Title>
          </Card.Header>
          <Card.Content className="text-3xl font-bold">
            ${avgPrice.toFixed(2)}
          </Card.Content>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <Card.Header>
            <Card.Title>Monthly Sales</Card.Title>
          </Card.Header>
          <Card.Content className="h-64">
            <BarChart 
              data={salesData.values}
              labels={salesData.labels}
            />
          </Card.Content>
        </Card>
        
        <Card>
          <Card.Header>
            <Card.Title>Top Products</Card.Title>
          </Card.Header>
          <Card.Content className="h-64">
            <PieChart
              data={popularProducts.map(p => p.views || p.price)}
              labels={popularProducts.map(p => p.title)}
            />
          </Card.Content>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <Card.Header>
          <Card.Title>Recent Activity</Card.Title>
        </Card.Header>
        <Card.Content>
          <div className="space-y-4">
            {products.slice(0, 5).map(product => (
              <div key={product._id} className="flex justify-between items-center border-b pb-2 last:border-0">
                <span className="font-medium">{product.title}</span>
                <span className="text-sm text-gray-500">
                  {/* {product.updatedAt ? new Date(product.updatedAt).toLocaleDateString() : 'No date'} */}
                </span>
              </div>
            ))}
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default AnalyticsPage;