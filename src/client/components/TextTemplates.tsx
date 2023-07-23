import React from 'react';

interface TextTemplateProps {
  username: string;
  product: string;
  company: string;
}

const TextTemplate: React.FC<TextTemplateProps> = ({
  username,
  product,
  company,
}) => {
  const textTemplate = `Hello ${username}, thank you for purchasing ${product} from ${company}. Sincerely, ${company}.`;

  return <div>{textTemplate}</div>;
};

export default TextTemplate;
