import { useState } from "react";

interface MainProps {
    text:string;
}

const Main: React.FC<MainProps> = ({text}) => {
    const [generatedText, setGeneratedText] = useState('');
text = 'here is Main'
  const handleSubmit = (data: any) => {
    const { username, product, company } = data;
    const newText = `Hello ${username}, thank you for purchasing ${product} from ${company}. Sincerely, ${company}.`;
    setGeneratedText(newText);
  };

  const handleClearEditor = () => {
    setGeneratedText('');
  };
  
    return (
      <div>
        {text}
      </div>
       /*  <div>
        <MyForm onSubmit={handleSubmit} />
        <RichTextEditor text={generatedText} onClearEditor={handleClearEditor} />
      </div> */
    );
  };
  
  export default Main;