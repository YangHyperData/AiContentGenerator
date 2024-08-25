"use client";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "@/app/dashboard/_components/TemplateListSection";
import React, { useContext, useState } from "react";
import FormSection from "../../_components/FormSection";
import { chatSession } from "@/utils/AiModal";
import {db} from './../../../../../utils/db'
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from 'next/navigation';
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateUsageCreditContext";


interface TemplateContentProps {
  pram: string;
  setAioutput: React.Dispatch<React.SetStateAction<string>>; // Add setAioutput prop type
}

export default function TemplateContent({ pram, setAioutput }: TemplateContentProps) {
  const [loading, seLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const {user} = useUser();
  const router = useRouter();
  const {totalUsage,setTotalUsage} = useContext(TotalUsageContext);
  const {updateCreditUsage,setUpdateCreditUsage} = useContext(UpdateCreditUsageContext)
  /**
   * Used to generate content from AI
   * @param formData 
   * @returns 
   */
  const GenerateAIContent = async (formData: any) => {
    if(totalUsage>=100000){
      router.push('/dashboard/billing')
      return;
    }
    seLoading(true);
    const selectedTemplate = Templates?.find((item) => item.slug === pram);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAPIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
    const result = await chatSession.sendMessage(FinalAPIPrompt);
    console.log(result.response.text());
    setAioutput(result?.response.text()); 
    await SaveInDb(formData,selectedTemplate?.slug,result?.response.text());
    seLoading(false);
    setUpdateCreditUsage(Date.now())
  };

  const SaveInDb = async (formData: any, slug: string | undefined, aiRes: string | undefined) => {
    
    const finalSlug = slug ?? ''; 
    const finalAiRes = aiRes ?? ''; 
    const createdBy = user?.primaryEmailAddress?.emailAddress ?? ''; 
    const createdAt = moment().format('DD/MM/yyyy');
  
    if (!finalSlug || !createdBy) {
      console.error("Required fields are missing. Aborting database insert.");
      return;
    }
  
    const result = await db.insert(AIOutput).values({
      formData: JSON.stringify(formData),
      templateSlug: finalSlug,
      aiResponse: finalAiRes,
      createdBy: createdBy,
      createdAt: createdAt,
    });

    console.log(result);
  };
  

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === pram
  );

  return (
    <div>
      <FormSection
        selectedTemplate={selectedTemplate}
        userFormInput={(v: any) => GenerateAIContent(v)}
        loading={loading}
      />
    </div>
  );
}
