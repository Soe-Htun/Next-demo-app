import React from 'react'
export default function productDetailLayout({children}: {
    children: React.ReactNode;
  }) {
  return (
    <>
        {children}
        <div className='mt-3'>productDetail Nested Layout</div>
    </>
  )
}
