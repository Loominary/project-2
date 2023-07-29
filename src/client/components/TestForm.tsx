import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { CustomerType } from './MyForm';
import { error } from 'console';
import { useCustomerContext } from '../Context/CustomerProvider';
import { TemplateType } from '../shared/types';

interface FormData {
  custId:number;
}


interface Template {
  text:string;
}
interface FormProps {
  onSubmitTest: (data: FormData) => void;
  //onSubmitTest2: (data: Template) =>void;
}

const initialValues: FormData = {
  custId: 0,
};

const TestForm: React.FC<FormProps> = ({ onSubmitTest }) => {
const [customersData, setCustomersData] = useState<Array<CustomerType>>([]);
const [templateData, setTemplateData] = useState<Array<TemplateType>>([]);
const { customers, setCustomers } = useCustomerContext();




//mock data
const data = `Hello {username}, thank you for purchasing {product} from {company}. Sincerely, {company}.`
const regex = /{(.*?)}/g;
const someObj ={
  username:'Me',
  product:'You',
  company: 'Everyone'
}
useEffect(() => {
  console.log(customers);
  
}, [customers]);



function getCustomers(custId: number) {
  console.log('getCustomers here');
  fetch(`http://localhost:3000/customers/${custId}`, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(json => {
      setCustomers(json); // Use setCustomers directly, it's available in this scope
    })
    .catch((error) => {
      console.error('Error fetching: ', error);
    });
}

function getTemplate(tempId:number){
  console.log('getTemplate here');
  fetch(`http://localhost:3000/templates/${tempId}`, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(json => {
      setTemplateData(json); // Use setCustomers directly, it's available in this scope
    })
    .catch((error) => {
      console.error('Error fetching: ', error);
    });
  
}

function runFilter(){
let custData= customers[0];
console.log(templateData);
console.log(custData.id);

}

function templateRun(){

}


  const handleSubmitTest = (values: FormData) => {
    const custId = values.custId;
    //console.log(values.custId);
    console.log(`${custId}:`+typeof(custId));
    getCustomers(custId)
    
    //getCustomers(custId)
    //onSubmitTest(values);
  };

  return (
    <><Formik initialValues={initialValues} onSubmit={handleSubmitTest}>
      <Form>
        <div>
          <label htmlFor="custId">ID:</label>
          <Field type="number" id="custId" name="custId" />
        </div>
        <button type="submit">Find</button>
      </Form>
    </Formik>
    <button onClick={runFilter}>Log Check</button>
    
    </>
    
  );
};

export default TestForm;
