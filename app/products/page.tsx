import ProductTable from '@/components/ProductTable'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const ProductsPage = () => {
  return (
    <div className='px-3 w-full h-full'>
      <div className="w-full h-full flex flex-col px-6">
        <h1 className='uppercase font-semibold md:text-2xl'>Mes produits</h1>
        <Separator className="mt-6 mb-0" />
      {/*products*/}
        <div className="w-full h-full flex justify-center">
          <ProductTable/>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage