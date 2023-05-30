import React, {useState} from "react";
import {Editor} from 'react-draft-wysiwyg';
import draftToHtml from "draftjs-to-html";
import {convertToRaw, EditorState} from "draft-js";
const Index = ({getContent}) => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const handleEditorChange = (state) => {
        setEditorState(state);
        sendContent();
        console.log(state)
    };
    const sendContent = () => {
        getContent(draftToHtml(convertToRaw(editorState?.getCurrentContent())));
        console.log(editorState.getCurrentContent())
    };
    return (
        <>
            <Editor
                editorState={editorState}
                toolbarClassName="bg-gray-200 border border-gray-300 rounded p-2"
                toolbar={{
                    options: [
                        "history",
                        "inline",
                        "textAlign",
                        "blockType",
                        "fontSize",
                        "list",
                    ],
                }}
                onEditorStateChange={handleEditorChange}
            />
            {/*<textarea value={draftToHtml(convertToRaw(text.getCurrentContent()))}></textarea>*/}
        </>
    );
};

export default Index;