import React from 'react'

// types
import { ProductType } from '@/types'

// UI
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
} from "@nextui-org/table"
import {Chip} from "@nextui-org/chip"

const ProductList = ({list} : {list: ProductType[]}) => {

    
    /**
         * Translates a category name to its corresponding display name.
         *
         * @param {string} category - The category name to be translated.
         * @return {string} The translated display name of the category.
    */
    const filterCategoryName = function (category: string) {
        switch (category) {
            case "drink":
                return "Boisson"
            case "ppn":
                return "ppn"
            case "dairyProduct":
                return "Produits Laitiers"
            default:
                return "Autre"
        }
    }
    return (
        <Table className='h-full overflow-y-hidden ' aria-label="Products Table">
            <TableHeader>
                <TableColumn>PRODUITS</TableColumn>
                <TableColumn className='uppercase'>Catégorie</TableColumn>
                <TableColumn>PRIX D'ACHAT</TableColumn>
                <TableColumn>PRIX DE VENTE</TableColumn>
            </TableHeader>
            <TableBody>
                {list.map((product, index) => (
                    <TableRow key={index} className='hover:bg-zinc-100 cursor-pointer transition-all'>
                        <TableCell className='flex items-center gap-3'>
                            <img src={product.img} alt={product.title} className="w-[50px] h-[50px] object-cover rounded-md"/>
                            <div className='flex flex-col min-w-[200px]'>
                                <span className='font-semibold text-md mb-1'>{product.title}</span>
                                <span className='text-zinc-400 text-tiny'>{product.manufacturer}</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <Chip color='default' variant='dot'>
                                    {filterCategoryName(product.category)}
                            </Chip>
                        </TableCell>
                        <TableCell className='text-tiny text-zinc-600'>
                            <Chip color="warning" variant="flat">
                                {new Intl.NumberFormat('fr-MG', { style: 'currency', currency: 'MGA' }).format(product.purchasePrice)}
                            </Chip>
                        </TableCell>
                        <TableCell className='text-tiny text-zinc-600'>
                            <Chip color="success" variant="flat">
                                {new Intl.NumberFormat('fr-MG', { style: 'currency', currency: 'MGA' }).format(product.sellingPrice)}
                            </Chip>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ProductList