import { useState, useContext } from 'react';
import { CustomerContext } from '../Context/CustomerProvider';

const useFormSubmit = () => {
  const [generatedText, setGeneratedText] = useState('');

  const handleSubmit = (data: any) => {
    const { username, product, company } = data;
    const newText = `Hello ${username}, thank you for purchasing ${product} from ${company}. Sincerely, ${company}.`;
    setGeneratedText(newText);
  };

  const handleClearEditor = () => {
    setGeneratedText('');
  };

  return {
    generatedText,
    handleSubmit,
    handleClearEditor,
  };
};


const useCustomerData = () => {
  const customerContext = useContext(CustomerContext);

  if (!customerContext) {
    throw new Error('useCustomerData must be used within a CustomerProvider');
  }

  const { customers } = customerContext;

  return customers; // Assuming you want to use the first customer from the context array
};

export {useCustomerData, useFormSubmit};
