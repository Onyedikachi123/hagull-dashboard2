

const Analytics = () => {
  const reports = [
    {
      title: 'Sales Performance',
      description: 'Analyze your sales performance over time to identify trends and opportunities for growth.',
    },
    {
      title: 'Customer Demographics',
      description: 'Understand your customer base by analyzing demographic data such as age, gender, and location.',
    },
    {
      title: 'Product Insights',
      description: 'Gain insights into your most popular products and categories to inform your inventory and marketing strategies.',
    },
    {
      title: 'Revenue Analysis',
      description: 'Track your revenue and profitability to ensure your business is on a sustainable path.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Reporting and Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reports.map((report, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold">{report.title}</h2>
            <p className="text-gray-600 mt-2">{report.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
