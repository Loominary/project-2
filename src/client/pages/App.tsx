import React, { useState } from 'react';
import MyForm from '../components/MyForm';
//import TextTemplate from '../components/TextTemplates';
import RichTextEditor from '../components/RichTextEditor';
import Form from '../components/MyForm';
import Main from '../components/Main';
import { Route, Routes } from 'react-router-dom';



const App: React.FC = () => {
/*   const [generatedText, setGeneratedText] = useState('');

  const handleSubmit = (data: any) => {
    const { username, product, company } = data;
    const newText = `Hello ${username}, thank you for purchasing ${product} from ${company}. Sincerely, ${company}.`;
    setGeneratedText(newText);
  };

  const handleClearEditor = () => {
    setGeneratedText('');
  }; */

  return (
    <>
        
        <Route 
        path='/main'
        element={
          <Main text={''}/>
        }
        />
        <Route
        path='/customers'
        element={
          <MyForm/>
        }
        />


    </>
  );
};

export default App;


