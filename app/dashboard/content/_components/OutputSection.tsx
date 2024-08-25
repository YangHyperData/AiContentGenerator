import React, { useRef, useEffect, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface OutputSectionProps {
  aioutput: string;
}

function OutputSection({ aioutput }: OutputSectionProps) {
  const editorRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aioutput);
    }
  }, [aioutput]);

  const handleEditorChange = () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      console.log(editorInstance.getMarkdown());
    } else {
      console.log('Editor instance is not available inside handleEditorChange');
    }
  };

  if (!isClient) {
    return null; 
  }

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5 font-bold text-xl'>
        <h2 className='font-medium text-xl'>Your Result</h2>
        <Button onClick={() => navigator.clipboard.writeText(aioutput)} className='flex gap-2'><Copy className='w-4 h-4' /> Copy </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue={aioutput || "Your result will appear here!"} // Use aioutput prop
        initialEditType="wysiwyg"
        height="600px"
        spellcheck={false}
        useCommandShortcut={true}
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default OutputSection;
