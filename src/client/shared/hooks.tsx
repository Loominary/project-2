import { useState } from 'react';

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

export default useFormSubmit;