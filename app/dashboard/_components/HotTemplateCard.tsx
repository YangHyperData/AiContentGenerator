import React from 'react';
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';
import Link from 'next/link';

function HotTemplateCart(item: TEMPLATE) {
  return (
    <Link href={'/dashboard/content/' + item?.slug}>
      <div className="shadow-md rounded-sm bg-white flex items-center justify-center overflow-hidden hover:scale-105 transition-all">
        <Image src={item.icon} alt='icon' width={50} height={50} className="object-contain"/>
      </div>
    </Link>
  );
}

export default HotTemplateCart;
