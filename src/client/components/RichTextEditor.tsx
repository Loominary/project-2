import React, { useEffect, useState } from 'react';
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface RichTextEditorProps {
    text: string;
    onClearEditor: () => void;
  }
  
  const RichTextEditor: React.FC<RichTextEditorProps> = ({ text, onClearEditor }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
  
    useEffect(() => {
      if (text) {
        const contentState = ContentState.createFromText(text);
        setEditorState(EditorState.createWithContent(contentState));
      } else {
        setEditorState(EditorState.createEmpty());
      }
    }, [text]);
  
    const handleEditorChange = (newEditorState: EditorState) => {
      setEditorState(newEditorState);
    };
  
    const handleClearClick = () => {
      onClearEditor();
      setEditorState(EditorState.createEmpty());
    };
  
    return (
      <div>
        <Editor editorState={editorState} onEditorStateChange={handleEditorChange} />
        <button onClick={handleClearClick}>Clear Editor</button>
      </div>
    );
  };
  
  export default RichTextEditor;
