import { useEffect, useState } from "react";

import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import * as React from "react";
import { convertToHTML } from 'draft-convert';


const ControlledEditor = ({ htmlContent }:any) => {
  // define the local state, using the createState callback to create the initial value
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [ConvertedContent,setConvertedContent]=useState({});

  const handleEditorChange = (state: React.SetStateAction<EditorState>) => {
    setEditorState(state);
    convertContentToHTML();
  }
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
    console.log(ConvertedContent);
  }
  return (
    <Editor
    toolbarClassName="toolbarClassName"
    wrapperClassName="wrapperClassName"
    editorClassName="editorClassName"
    wrapperStyle={{ width: '100%', border: "2px solid black", height:'50%' }}
      editorState={editorState}
      onEditorStateChange={handleEditorChange}
     
    />
  );
};

export default function App() {
  const [text, setText] = useState("Hello World");
  return (
    <div>
      <h2>Source Text</h2>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <h2>Editor</h2>
      <ControlledEditor htmlContent={text} />
    </div>
  );
}

