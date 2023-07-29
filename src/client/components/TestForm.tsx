import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { CustomerType } from './MyForm';

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
const [customers, setCustomers] = useState<Array<CustomerType>>([])

//mock data
const data = `Hello {username}, thank you for purchasing {product} from {company}. Sincerely, {company}.`
const regex = /{(.*?)}/g;
const someObj ={
  username:'Me',
  product:'You',
  company: 'Everyone'
}



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

function getCustomers(custId:number){
console.log('getCustomers here');
fetch(`http://localhost:3001/customers?id=${custId}`,{
  method:'GET'
})//.then(res=> res.json()).then(json=>{setCustomers(json)})


}

const runFilter = ()=>{
console.log(data);
//getCustomers(1);
console.log(customers);

//const entries = Object.entries(this.results)
// const replacedData = data.replace(regex, (match:string, placeholder:string)=>{
//   for (const entry of someObj)
// })
  
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
    <button onClick={runFilter}>Take template and replace fields with values</button>
    </>
    
  );
};

export default TestForm;
