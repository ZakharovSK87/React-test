import React from "react";

interface ModalProps {
  setReturnRate: (rate: number) => void;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ setReturnRate, onClose }) => {
  const handleSelect = (rate: number) => {
    setReturnRate(rate);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold text-center mb-4">Графики</h2>
        <div className="flex flex-col space-y-3">
          <button
            onClick={() => handleSelect(8.91)}
            className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            8.91% (MSCI World)
          </button>
          <button
            onClick={() => handleSelect(11.19)}
            className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            11.19% (S&P 500)
          </button>
          <button
            onClick={() => handleSelect(4.95)}
            className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            4.95% (Money Market Funds)
          </button>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Custom Rate (%):
          </label>
          <input
            type="number"
            onBlur={(e) => {
              const value = parseFloat(e.target.value);
              if (!isNaN(value) && value >= 0 && value <= 100) {
                handleSelect(value);
              }
            }}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          onClick={onClose}
          className="w-full mt-4 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;
