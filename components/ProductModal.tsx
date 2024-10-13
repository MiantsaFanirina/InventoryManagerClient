import React from 'react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const ProductModal = () => {
    return (
        <Card className='flex w-full bg-slate-900 overflow-hidden'>
            <div className='w-1/2'>
                <img src="https://ryliegold.wordpress.com/wp-content/uploads/2018/10/cocacola-sans-serif.jpg?w=748" alt="product" className='w-full h-[600px] object-cover object-center'/>                
            </div>
            <div className='w-1/2 flex flex-col p-12'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-xl uppercase font-semibold'>Coca Cola GM</h1>
                    <h1 className='text-sm text-slate-300'>(Coca Cola Company)</h1>
                </div>
                <div className='flex justify-between items-center mt-3'>
                    <h1 className='py-1 px-3 rounded-lg bg-slate-600 text-xl'>3 500 MGA</h1>
                    <h1 className='py-1 px-2 rounded-xl border border-white text-sm'>Boisson</h1>
                </div>

                <Separator className='my-6' />
                
                <h1 className='text-md font-semibold'>Description:</h1>

                <p className='mt-6 text-slate-400'>
                    aut odit molestiae ducimus error fugit enim officiis libero sint ipsum possimus
                    in facere. Velit, iste fugiat? Cupiditate dolore atque inventore doloremque.
                    Veritatis modi doloribus nesciunt ipsam reprehenderit consequatur odio eius
                    cumque saepe dignissimos dolorem laboriosam culpa aut asperiores optio sit
                    sapiente ea iusto animi distinctio aperiam, in alias eaque! Amet quos culpa,
                    ipsam doloribus asperiores officia, harum optio odit perspiciatis beatae
                    voluptatem hic. Velit esse voluptatibus, dolor totam consequuntur id aspernatur
                    sunt iste! Eum, facere. 
                </p>

            </div>
        </Card>   
    )
}

export default ProductModal