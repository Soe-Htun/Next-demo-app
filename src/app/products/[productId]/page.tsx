import { notFound } from 'next/navigation'
import React from 'react'

export default function ProductDetails({
  params
}: {params: {productId: string}}) {
  if(parseInt(params.productId) > 100) {
    notFound()
  }
  return (
    <div>ProductDetailssss {params.productId}</div>
  )
}
