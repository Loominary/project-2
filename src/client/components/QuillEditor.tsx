import React, { useEffect, useRef } from 'react';
import Quill, { QuillOptionsStatic } from 'quill';
import 'quill/dist/quill.snow.css';

interface QuillEditorProps {
  text: string;
  onClearEditor: () => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ text, onClearEditor }) => {
const isMounted = useRef(false);
const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (!quillRef.current) {
      quillRef.current = new Quill('#editor', quillOptions);
      quillRef.current.setText(text);
    }

    return () => {
      if (quillRef.current) {
        quillRef.current = null;
      }
    };
  }, [text]);

  const quillOptions: QuillOptionsStatic = {
    theme: 'snow',
    placeholder: '',
  };

  const handleClearClick = () => {
    onClearEditor();
    if (quillRef.current) {
      quillRef.current.setText('');
    }
  };

  return (
    <div>
      <div id="editor" style={{ height: '400px' }} />
      <button onClick={handleClearClick}>Clear Editor</button>
    </div>
  );
};

export default QuillEditor;
