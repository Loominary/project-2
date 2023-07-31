import { useState } from "react";
import RichTextEditor from "./RichTextEditor";
import MyForm from "./MyForm";
import {useFormSubmit} from "../shared/hooks";
import TestForm from "./TestForm";

interface MainProps {
    text:string;
}

const Main: React.FC<MainProps> = ({text}) => {
  const { generatedText, handleSubmit, handleClearEditor } = useFormSubmit();
text = 'here is Main'
  


  
    return (
      <><div>
        {text}
      </div>
      <div>
          <TestForm onSubmitTest={handleSubmit}/>
          <MyForm onSubmit={handleSubmit} />
          <RichTextEditor text={generatedText} onClearEditor={handleClearEditor} />
        </div></>
    );
  };
  
  export default Main;