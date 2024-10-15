"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import React from 'react'

function Billing() {
  const router = useRouter();

  const handlePayment = () => {
    router.push('/dashboard/billdetail');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 py-20 px-4">
      <div className="text-center w-full max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Upgrade With Monthly Plan</h2>
        <div className="flex justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row flex-wrap">
          {/* Free Plan */}
          <div className="border rounded-lg p-6 bg-white flex flex-col items-center shadow-md w-full md:w-1/3" style={{ minHeight: '450px' }}>
            <h3 className="text-2xl md:text-3xl font-bold">Free</h3>
            <div className="text-lg md:text-2xl text-gray-700 mt-3">
              <span className="text-4xl md:text-5xl font-bold">0$</span> <span className="text-base md:text-xl">/month</span>
            </div>
            <ul className="mt-4 space-y-3 text-left text-sm md:text-xl">
              <li className="flex items-center">
                <span className="text-primary font-bold">✓</span>
                <span className="ml-2 font-medium">100,000 Words/Month</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary font-bold">✓</span>
                <span className="ml-2 font-medium">50+ Content Templates</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary font-bold">✓</span>
                <span className="ml-2 font-medium">Unlimited Download & Copy</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary font-bold">✓</span>
                <span className="ml-2 font-medium">1 Month of History</span>
              </li>
            </ul>
            <Button className="mt-auto mb-5 px-4 py-2 w-full rounded-2xl h-16 bg-gray-500 text-white text-xl">
              Currently Active Plan
            </Button>
          </div>

          {/* Monthly Plan */}
          <div className="border rounded-lg p-6 bg-white flex flex-col items-center shadow-md w-full md:w-1/3" style={{ minHeight: '450px' }}>
            <h3 className="text-2xl md:text-3xl font-bold">Monthly</h3>
            <div className="text-lg md:text-2xl text-gray-700 mt-3">
              <span className="text-4xl md:text-5xl font-bold">9.99$</span> <span className="text-base md:text-xl">/month</span>
            </div>
            <ul className="mt-4 space-y-3 text-left text-sm md:text-xl">
              <li className="flex items-center">
                <span className="text-primary font-bold">✓</span>
                <span className="ml-2 font-medium">1,000,000 Words/Month</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary font-bold">✓</span>
                <span className="ml-2 font-medium">50+ Template Access</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary font-bold">✓</span>
                <span className="ml-2 font-medium">Unlimited Download & Copy</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary font-bold">✓</span>
                <span className="ml-2 font-medium">1 Year of History</span>
              </li>
            </ul>
            <Button onClick={handlePayment} className="mt-auto mb-5 px-4 py-2 w-full rounded-2xl h-16 border-2 border-purple-500 bg-white text-gray-700 text-xl">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing;
