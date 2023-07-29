import { Route, Routes } from 'react-router-dom';

import React, { useState } from 'react';
import MyForm from '../components/MyForm';
import Main from '../components/Main';
import useFormSubmit from '../shared/hooks';
import TestForm from '../components/TestForm';




const App: React.FC = () => {
  const { handleSubmit } = useFormSubmit();




  return (
    <>
        <Routes>
        <Route 
        path='/main'
        element={
          <Main text={''}/>
        }
        />
        <Route
        path='/customers'
        element={
          <MyForm onSubmit={handleSubmit}/>
        }
        />
        <Route
        path='/test'
        element={
          <TestForm onSubmitTest={handleSubmit} /* onSubmitTest2={handleSubmit} */
          />
        }
        />

</Routes>
    </>
  );
};

export default App;


