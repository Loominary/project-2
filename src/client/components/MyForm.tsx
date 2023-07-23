import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';

interface FormData {
  username: string;
  product: string;
  company: string;
}


interface FormProps {
  onSubmit: (data: FormData) => void;
}

export type CustomerType ={
  id:number;
  name:string;
  location:string;
  product:string;
  type:number;
}
const initialValues: FormData = {
  username: '',
  product: '',
  company: '',
};

const MyForm: React.FC<FormProps> = ({ onSubmit }) => {
const [customers, setCustomers] = useState<Array<CustomerType>>([])

useEffect(()=>{
  getCustomers();
}, []);

  function getCustomers(){
    fetch('http://localhost:3000/customers',{
      method: 'GET',
    }).then (res=>res.json()).then(json=>{      
      setCustomers(json);      
      console.log(json);
      
    })
  }


  const handleSubmit = (values: FormData) => {
    onSubmit(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="username">Username:</label>
          <Field type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="product">Product:</label>
          <Field type="text" id="product" name="product" />
        </div>
        <div>
          <label htmlFor="company">Company:</label>
          <Field type="text" id="company" name="company" />
        </div>
        <button type="submit">Generate Text</button>
      </Form>
    </Formik>
  );
};

export default MyForm;
