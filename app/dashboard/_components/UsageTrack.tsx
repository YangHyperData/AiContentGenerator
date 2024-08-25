import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import React, { useContext, useEffect, useState } from 'react';
import { eq } from 'drizzle-orm'; // Import eq if not already imported
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { useRouter } from "next/navigation";
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateUsageCreditContext';
function UsageTrack() {
    const { user } = useUser();
    const router = useRouter();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const {updateCreditUsage,setUpdateCreditUsage} = useContext(UpdateCreditUsageContext);
    const handleGetBiling = () => {
        router.push("/dashboard/billing");
    };
    useEffect(() => {
        if (user) {
            GetData();
        }
    }, [user]);

    useEffect(() => {
        user&&GetData();
    }, [updateCreditUsage&&user]);

    const GetData = async () => {
        try {
            // Fetch data from the database
            const result: HISTORY[] = await db.select().from(AIOutput)

                .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

            GetTotalUsage(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const GetTotalUsage = (result: HISTORY[]) => {
        let total: number = 0;

        // Calculate total length of aiResponse
        result.forEach(element => {
            if (element.aiResponse) {
                total = total + element.aiResponse.length; // Convert length to number directly
            }
        });
        setTotalUsage(total);
        console.log('Total AI Response Length:', total);
    }

    return (
        <div className='m-5'>
            <div className='bg-primary text-white p-3 rounded-lg'>
                <h2 className='font-bold'>Credits</h2>
                <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                    <div className='h-2 bg-white rounded-full'
                        style={{
                            width: (totalUsage / 100000) * 100 + "%"
                        }}
                    ></div>
                </div>
                <h2 className='text-sm my-2' >{totalUsage}/100,000 credit used</h2>
            </div>
            <Button onClick={handleGetBiling} variant={'secondary'} className='w-full my-3 text-primary text-xl font-bold bg-gray-200'>Upgrade</Button>
        </div>
    );
}

export default UsageTrack;
