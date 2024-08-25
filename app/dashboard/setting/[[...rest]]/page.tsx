import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Setting() {
  return (
    <div className='flex items-center justify-center h-full mt-10'>
        <UserProfile/>
    </div>
  )
}

export default Setting
