import Templates from '@/app/(data)/Templates';
import React, { useState } from 'react';
import HotTemplateCart from './HotTemplateCard';

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function HotTemplateListSection() {
  const [templateList, setTemplateList] = useState(
    Templates.filter(
      (template) =>
        template.name === 'Write Code' ||
        template.name === 'Tiktok Content' ||
        template.name === 'Blog Title' ||
        template.name === 'Youtube Description' ||
        template.name === 'Instagram Post Generator'
    )
  );

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 p-10 ">
        {templateList.map((item: TEMPLATE, index: number) => (
          <HotTemplateCart key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default HotTemplateListSection;
