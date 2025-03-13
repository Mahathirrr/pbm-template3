import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, CreditCard, Wallet, Plus } from 'lucide-react';

interface PaymentMethod {
  id: string;
  type: 'card' | 'wallet';
  name: string;
  details: string;
  isDefault: boolean;
}

const PaymentMethodsScreen = () => {
  const navigate = useNavigate();
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: '1',
      type: 'card',
      name: 'Visa ending in 4242',
      details: 'Expires 12/25',
      isDefault: true,
    },
    {
      id: '2',
      type: 'wallet',
      name: 'E-Wallet',
      details: 'Balance: Rp2,500,000',
      isDefault: false,
    },
  ]);

  const handleSetDefault = (id: string) => {
    setPaymentMethods(methods =>
      methods.map(method => ({
        ...method,
        isDefault: method.id === id,
      }))
    );
  };

  const handleDelete = (id: string) => {
    setPaymentMethods(methods => methods.filter(method => method.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-violet-600 p-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/settings')}
            className="text-white p-2 hover:bg-violet-500 rounded-lg transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold text-white">Payment Methods</h1>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">Your Payment Methods</h2>
            <button
              onClick={() => {/* Handle add payment method */}}
              className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
            >
              <Plus size={24} />
            </button>
          </div>

          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-violet-100 rounded-lg">
                    {method.type === 'card' ? (
                      <CreditCard size={24} className="text-violet-600" />
                    ) : (
                      <Wallet size={24} className="text-violet-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{method.name}</h3>
                    <p className="text-sm text-gray-600">{method.details}</p>
                    {method.isDefault && (
                      <span className="text-xs text-violet-600 font-medium">Default</span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  {!method.isDefault && (
                    <button
                      onClick={() => handleSetDefault(method.id)}
                      className="text-sm text-violet-600 hover:text-violet-700"
                    >
                      Set Default
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(method.id)}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => {/* Handle add payment method */}}
          className="w-full mt-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors"
        >
          Add New Payment Method
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodsScreen;