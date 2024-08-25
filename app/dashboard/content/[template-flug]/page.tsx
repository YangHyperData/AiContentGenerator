"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import TemplateContent from "./_components/TemplateContent";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PROPS {
  params: {
    "template-flug": string;
  };
}



function CreateContent(props: PROPS) {
  const [aioutput, setAioutput] = useState<string>('');

  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button><ArrowLeft/> Back</Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* TemplateContent */}
        <TemplateContent 
          pram={props.params["template-flug"]}
          setAioutput={setAioutput} // Pass down setAioutput function
        />
        <div className="col-span-2">
          <OutputSection aioutput={aioutput} /> {/* Pass aioutput state */}
        </div>
      </div>
    </div>
  );
}

export default CreateContent;
