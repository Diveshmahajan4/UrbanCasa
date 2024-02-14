import React from 'react'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({children}: {children: ReactNode}) => {
  return (
    <div className='mx-auto w-full max-w-screen-2xl'>
      {children}
    </div>
  )
}

export default MaxWidthWrapper