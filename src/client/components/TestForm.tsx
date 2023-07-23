import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { CustomerType } from './MyForm';

interface FormData {
  custid:number;
}


interface FormProps {
  onSubmit: (data: FormData) => void;
}

const initialValues: FormData = {
  custid: 0,
};

const TestForm: React.FC<FormProps> = ({ onSubmit }) => {
const [customers, setCustomers] = useState<Array<CustomerType>>([])

/* useEffect(()=>{
  getCustomers();
}, []);

  function getCustomers(){
    fetch('http://localhost:3000/customers',{
      method: 'GET',
    }).then (res=>res.json()).then(json=>{      
      setCustomers(json);      
      console.log(json);
      
    })
  } */


  const handleSubmit = (values: FormData) => {
    console.log('Onsubmithere');
    
    onSubmit(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="custId">ID:</label>
          <Field type="number" id="custId" name="custId" />
        </div>
        <button type="submit">Find</button>
      </Form>
    </Formik>
  );
};

export default TestForm;
