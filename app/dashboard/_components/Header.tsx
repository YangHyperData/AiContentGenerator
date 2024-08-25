import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
      <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white'>
        <Search />
        <input type='text' placeholder='Search...'
          className='outline-none text-lg font-bold'
        ></input>
      </div>
      <div className='flex gap-5 items-center'>
        <h2 className='bg-primary p-1 rounded-full text-white px-2
        text-lg font-medium
        '>
          🔥Join MemberShip just for $9.99/Month</h2>
        <UserButton
          appearance={{
            elements: {
              avatarBox: 'h-16 w-16', // Adjust the size here
            },
          }}
        />
      </div>
    </div>
  )
}

export default Header
