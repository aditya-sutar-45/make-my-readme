import { Editor } from "@monaco-editor/react";

function MarkdownEditor({ markdown, setMarkdown, editorRef }) {
  const handleEditorChange = (value) => {
    // console.log(markdown);
    setMarkdown(value);
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <Editor
      height="92vh"
      language="markdown"
      defaultValue={markdown}
      theme="vs-dark"
      onMount={onMount}
      value={markdown}
      onChange={handleEditorChange}
    />
  );
}

export default MarkdownEditor;
