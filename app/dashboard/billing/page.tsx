"use client"
import { Button } from '@/components/ui/button'
import React from 'react'

function billing() {

  // const handlePayment = async () => {
  //   try {
  //     const response = await fetch('/api/create-subscription', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ amount: 999000 }), // Example amount in VND
  //     });

  //     const { paymentUrl } = await response.json();
  //     if (paymentUrl) {
  //       window.location.href = paymentUrl; // Redirect to VNPay payment page
  //     }
  //   } catch (error) {
  //     console.error('Payment error:', error);
  //   }
  // };
  const handlePayment = () => {
    // Chuyển hướng đến URL của VNPay sandbox
    window.location.href = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html';
  };

  return (
    <div className="justify-center items-center min-h-screen bg-gray-200 pt-20">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-8">Upgrade With Monthly Plan</h2>
        <div className="flex justify-center space-x-8 flex-wrap">
          {/* Free Plan */}
          <div className="border rounded-lg p-6 bg-white  flex flex-col items-center shadow-md" style={{ minWidth: '350px', minHeight: '450px' }}>
            <h3 className="text-3xl font-bold">Free</h3>
            <div className="text-2xl text-gray-700 mt-3">
              <span className="text-5xl font-bold">0$</span> <span className="text-xl">/month</span>
            </div>
            <ul className="mt-4 space-y-3 text-left">
              <li className="flex items-center">
                <span className="text-primary font-bold">✓</span>
                <span className="ml-2 font-medium text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                  100,000 Words/Month
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-primary font-bold">✓</span>
                <span className="ml-2 font-medium text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                  50+ Content Templates
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-primary font-bold">✓</span>
                <span className="ml-2 font-medium text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                  Unlimited Download & Copy
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-primary font-bold">✓</span>
                <span className="ml-2 font-medium text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                  1 Month of History
                </span>
              </li>
            </ul>
            <Button className="mt-auto mb-5 px-4 py-2 w-full rounded-2xl h-16 bg-gray-500 text-white text-xl">
              Currently Active Plan
            </Button>
          </div>

          {/* Monthly Plan */}
          <div className="border rounded-lg p-6 bg-white  flex flex-col items-center shadow-md" style={{ minWidth: '350px', minHeight: '450px' }}>
            <h3 className="text-3xl font-bold">Monthly</h3>
            <div className="text-2xl text-gray-700 mt-3">
              <span className="text-5xl font-bold">9.99$</span> <span className="text-xl">/month</span>
            </div>
            <ul className="mt-4 space-y-3 text-left">
              <li className="flex items-center">
                <span className="text-primary font-bold">✓</span>
                <span className="ml-2 font-medium text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                  1,000,000 Words/Month
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-primary font-bold">✓</span>
                <span className="ml-2 font-medium text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                  50+ Template Access
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-primary font-bold">✓</span>
                <span className="ml-2 font-medium text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                  Unlimited Download & Copy
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-primary font-bold">✓</span>
                <span className="ml-2 font-medium text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                  1 Year of History
                </span>
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

export default billing
