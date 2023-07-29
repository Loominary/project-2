import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { TemplateType } from '../shared/types';

interface FormData {
  tempId:number;
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
  tempId:0,
};

const MyForm: React.FC<FormProps> = ({ onSubmit }) => {
const [customers, setCustomers] = useState<Array<CustomerType>>([])
const [templateData, setTemplateData] = useState<Array<TemplateType>>([]);


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
    onSubmit(values);
    console.log('getTemplate here');
    fetch(`http://localhost:3000/templates/${values.tempId}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(json => {
        setTemplateData(json); 
      })
      .catch((error) => {
        console.error('Error fetching: ', error);
      })
      console.log(templateData[0]);
      
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="tempId">ID:</label>
          <Field type="number" id="tempId" name="tempId" />
        </div>
        <button type="submit">Find</button>
      </Form>
    </Formik>
  );
};

export default MyForm;
