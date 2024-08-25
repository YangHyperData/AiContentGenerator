"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Templates from './../../(data)/Templates';
import { Button } from '@/components/ui/button';
import { db } from './../../../utils/db'; 
import { AIOutput } from '@/utils/schema';

import moment from 'moment';

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string | null;
  createdAt: string | null;
}

const History = () => {
  const [data, setData] = useState<HISTORY[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const result = await db.select().from(AIOutput).execute();
      setData(result);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  // Function to format date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? 'Invalid Date' : moment(date).format('DD/MM/YYYY');
  };

  const handleCopy = (text: string | null) => {
    if (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          alert('Copied to Clipboard');
        })
        .catch((error) => {
          console.error('Failed to copy:', error);
        });
    } else {
      alert('No text to copy');
    }
  };
  return (
    <div>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: '#f4f4f4',
          borderBottom: '1px solid #ddd',
        }}
      >
        <h1 className='text-xl font-bold'>History</h1>
      </header>
      <div style={{ padding: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{  padding: '0.5rem' }} className='bg-gray-200'>Template</th>
              <th style={{  padding: '0.5rem' }} className='bg-gray-200'>AI Response</th>
              <th style={{  padding: '0.5rem' }} className='bg-gray-200'>Date</th>
              <th style={{  padding: '0.5rem' }} className='bg-gray-200'>Words</th>
              <th style={{  padding: '0.5rem' }} className='bg-gray-200'>Copy</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              const template = Templates.find(t => t.slug === item.templateSlug);
              return (
                <tr key={item.id}>
                  <td style={{ borderBottom: '1px solid #ddd', padding: '0.5rem' }} className='font-bold'>
                    {template && (
                      <>
                        {template.icon && (
                          <Image src={template.icon} alt={template.name} width={50} height={50} />
                        )}
                        {template.name}
                      </>
                    )}
                  </td>
                  <td style={{ borderBottom: '1px solid #ddd', padding: '0.5rem' }}>{item.aiResponse || ''}</td>
                  <td style={{ borderBottom: '1px solid #ddd', padding: '0.5rem' }}>{item.createdAt}</td>
                  <td style={{ borderBottom: '1px solid #ddd', padding: '0.5rem' }}>{(item.aiResponse ? item.aiResponse.split(' ').length : 0)}</td>
                  <td style={{ borderBottom: '1px solid #ddd', padding: '0.5rem' }}><Button onClick={() => handleCopy(item.aiResponse)}>Copy</Button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
