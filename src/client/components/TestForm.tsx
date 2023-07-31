import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { CustomerType } from './MyForm';
import { error } from 'console';
import { useCustomerContext, CustomerContext } from '../Context/CustomerProvider';
import { TemplateType } from '../shared/types';
import { useCustomerData, useFormSubmit } from '../shared/hooks';
import RichTextEditor from './RichTextEditor';

interface FormData {
  custId:number;
}


interface Template {
  text:string;
}
interface FormProps {
  onSubmitTest: (data: number) => void;
  //onSubmitTest2: (data: Template) =>void;
}

const initialValues: FormData = {
  custId: 0,
};

const TestForm: React.FC<FormProps> = ({ onSubmitTest }) => {
const [customersData, setCustomersData] = useState<Array<CustomerType>>([]);
const [templateData, setTemplateData] = useState<Array<TemplateType>>([]);
const { handleClearEditor } = useFormSubmit();
const [generatedText, setGeneratedText] = useState('');

const [templateId, setTemplateId] = useState<number | undefined>(undefined);

const { customers, setCustomers } = useCustomerContext();
const customer = useCustomerData()


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

async function getTemplateById(templateId:number){

    const res = await fetch(`http://localhost:3000/templates/${templateId}`);
    const data = await res.json();
    return data[0];
  
}

function replacePlaceholders(template: string, customer: any) {
  return template.replace(/{(.*?)}/g, (match, key) => customer[key.trim()] || '');
}

function runFilter(){
let custData= customers[0];
console.log(templateData);
console.log(custData.id);

}


const handleTemplateClick = async ()=>{
  if(templateId){
    try{
      
      const template = await getTemplateById(templateId);
        const message = replacePlaceholders(template.text, customer[0]);
        console.log(message);
        setGeneratedText(message);
      
    }
    catch(error){
      console.log('Error fetching template, ', error);
    }
  }else{
console.warn('Please enter a valid template ID');

  }
}


  const handleSubmitTest = (values: FormData) => {
    console.log(values);
    
    const custId = values.custId;
    getCustomers(custId);
    onSubmitTest(custId);
   
  };

  return (
    <><Formik initialValues={initialValues} onSubmit={handleSubmitTest}>
      <Form>
        <div>
          <label htmlFor="custId">Test ID:</label>
          <Field type="number" id="custId" name="custId" />
        </div>
        <button type="submit">Find</button>
      </Form>
    </Formik>
    <button onClick={runFilter}>Test Log Check</button>
    <div>
      <label htmlFor="templateId">Test Template ID:</label>
      <input type="number" id="templateId" value={templateId || ''} onChange={(e) => setTemplateId(Number(e.target.value))} />
      <button onClick={handleTemplateClick}>Generate Message</button>
    </div>
    <div><p>----------------------------------------------------------</p></div>
    <RichTextEditor text={generatedText} onClearEditor={handleClearEditor} />
    </>
    
  );
};

export default TestForm;
