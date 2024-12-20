// src/Portfolio.tsx
import React from 'react';

type PortfolioProps = {
  data: {
    totalInvested: number;
    totalProfit: number;
  };
};

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Portfolio Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between text-lg">
          <span className="text-gray-600">Total Portfolio:</span>
          <span className="font-bold text-xl text-green-600">
            £{(data.totalInvested + data.totalProfit).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-lg">
          <span className="text-gray-600">Total Invested:</span>
          <span className="font-bold text-xl text-blue-600">
            £{data.totalInvested.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-lg">
          <span className="text-gray-600">Total Profit:</span>
          <span className="font-bold text-xl text-green-500">
            £{data.totalProfit.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
