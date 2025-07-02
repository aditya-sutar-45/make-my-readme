import { Editor } from "@monaco-editor/react";
import { useMarkdown } from "../hooks/useMarkdown";

function MarkdownEditor({ editorRef }) {
  const { markdown, setMarkdown } = useMarkdown();

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
