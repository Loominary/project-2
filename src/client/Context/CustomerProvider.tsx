import React, { ReactNode, createContext, useContext, useState } from 'react';
import { CustomerType } from '../components/MyForm';



interface CustomerContextType {
  customers: CustomerType[];
  setCustomers: React.Dispatch<React.SetStateAction<CustomerType[]>>;
}

const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomerContext must be used within a CustomerProvider');
  }
  return context;
};

export function CustomerProvider({ children }: { children: ReactNode; }) {
  const [customers, setCustomers] = useState<CustomerType[]>([]);

  return (
    <CustomerContext.Provider value={{ customers, setCustomers }}>
      {children}
    </CustomerContext.Provider>
  );
}