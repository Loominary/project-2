import React from 'react';

interface TextTemplateProps {
  name: string;
  product: string;
  location: string;
}

const TextTemplate: React.FC<TextTemplateProps> = ({
  name,
  product,
  location,
}) => {
  const textTemplate = `Hello ${name}, thank you for purchasing ${product} from ${location}. Sincerely, ${location}.`;

  return <div>{textTemplate}</div>;
};

export default TextTemplate;
