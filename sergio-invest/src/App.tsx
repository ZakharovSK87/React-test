import React, { useState } from "react";
import { InputField, ChartComponent, Modal } from "./components";

const App: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(1000);
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(100);
  const [investmentPeriod, setInvestmentPeriod] = useState<number>(10);
  const [returnRate, setReturnRate] = useState<number>(8.91);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const calculateInvestmentData = () => {
    const yearlyData = [];
    const annualRate = returnRate / 100;

    let totalInvested = initialInvestment;
    let totalProfit = 0;

    for (let year = 1; year <= investmentPeriod; year++) {
      const yearInvestment = monthlyInvestment * 12;
      totalInvested += yearInvestment;

      const compoundProfit = (totalInvested + totalProfit) * annualRate;
      totalProfit += compoundProfit;

      yearlyData.push({
        year,
        total: totalInvested + totalProfit,
        profit: totalProfit,
      });
    }

    return {
      yearlyData,
      totalInvested,
      totalProfit,
    };
  };

  const data = calculateInvestmentData();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-700">
          Investment Calculator test
        </h1>
        <div className="space-y-4">
          <InputField
            label="Initial Investment (£)"
            value={initialInvestment}
            onChange={setInitialInvestment}
            step={1000}
            min={1}
            max={100000}
          />
          <InputField
            label="Monthly Investment (£)"
            value={monthlyInvestment}
            onChange={setMonthlyInvestment}
            step={100}
            min={1}
            max={10000}
          />
          <InputField
            label="Investment Period (Years)"
            value={investmentPeriod}
            onChange={setInvestmentPeriod}
            step={1}
            min={1}
            max={40}
          />
          <div className="flex items-center space-x-4">
            <label className="text-lg font-medium text-gray-700">
              Return Rate (%):
            </label>
            <input
              type="number"
              value={returnRate}
              onChange={(e) => setReturnRate(parseFloat(e.target.value))}
              step={0.01}
              min={0}
              max={100}
              className="w-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Выбор графиков
            </button>
          </div>
        </div>
        <ChartComponent yearlyData={data.yearlyData} />
        <div>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-gray-400 text-white py-3 rounded-lg hover:bg-gray-500 transition"
          >
            Данные графиков
          </button>
          {isDropdownOpen && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-md border border-gray-300 space-y-2">
              <p className="text-gray-700">
                <strong>Total Portfolio:</strong> £
                {(data.totalInvested + data.totalProfit).toFixed(2)}
              </p>
              <p className="text-gray-700">
                <strong>Total Invested:</strong> £{data.totalInvested.toFixed(2)}
              </p>
              <p className="text-gray-700">
                <strong>Total Profit:</strong> £{data.totalProfit.toFixed(2)}
              </p>
            </div>
          )}
        </div>
        {isModalOpen && <Modal setReturnRate={setReturnRate} onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );
};

export default App;



