import React, { useState } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const EditorConvertToHTML: React.FC = () => {
  const initialHtml = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
  const contentBlock = htmlToDraft(initialHtml);
  let defaultEditorState = EditorState.createEmpty();
  if (contentBlock) {
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    defaultEditorState = EditorState.createWithContent(contentState);
  }

  const [editorState, setEditorState] = useState<EditorState>(defaultEditorState);

  const onEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
      <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </div>
  );
};

export default EditorConvertToHTML;
