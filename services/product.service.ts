import { ProductType } from "@/types"
import { GetStaticProps } from "next"



export const getAllProducts = (async () => {
    const res = await fetch('http://localhost:3000/data/productlist.json', { cache: 'no-store' })
    const products = await res.json()
    console.log
    return { products  }
})
   