import React from 'react'

// Types
import { ProductType } from '@/types'

// UI
import { button as buttonStyles } from "@nextui-org/theme"
import { Link } from '@nextui-org/link'
import {Tabs, Tab} from "@nextui-org/tabs"
import { Input } from "@nextui-org/input"
import {Pagination, PaginationItem, PaginationCursor, PaginationItemType} from "@nextui-org/pagination";


// Icon
import { Icon } from '@iconify/react/dist/iconify.js'
import { ChevronIcon } from '@/svg/chevronIcon'

// Components
import ProductList from '@/components/product-list'

// Layout
import DefaultLayout from '@/layouts/default'


const ProductsPage = () => {
    const list: ProductType[] = [
        {
            id: '123',
            title: "Coca Cola GM",
            img: "https://ryliegold.wordpress.com/wp-content/uploads/2018/10/cocacola-sans-serif.jpg?w=748",
            purchasePrice: 2500,
            sellingPrice: 3500,
            manufacturer: "Coca Cola Company",
            category: "drink",
        },
        {
            id: '123',
            title: "Coca Cola PM",
            img: "https://ryliegold.wordpress.com/wp-content/uploads/2018/10/cocacola-sans-serif.jpg?w=748",
            purchasePrice: 1500,
            sellingPrice: 2200,
            manufacturer: "Coca Cola Company",
            category: "drink",
        },
        {
            id: '123',
            title: "Sprite PM",
            img: "https://cms.novafm.com.au/wp-content/uploads/2023/07/Screen-Shot-2023-07-13-at-1.21.11-pm.png",
            purchasePrice: 1400,
            sellingPrice: 2100,
            manufacturer: "Coca Cola Company",
            category: "drink",
        },
        {
            id: '123',
            title: "Fanta GM",
            img: "https://static.vecteezy.com/ti/vecteur-libre/p1/7978621-fanta-logo-de-la-marque-de-boisson-populaire-vinnytsia-ukraine-16-mai-202-gratuit-vectoriel.jpg",
            purchasePrice: 2500,
            sellingPrice: 3500,
            manufacturer: "Coca Cola Company",
            category: "drink",
        },
        {
            id: '123',
            title: "Mozarella",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVDaQvoksNfy--ZtdfUa7xFttKfvShTEASA&s",
            purchasePrice: 5000,
            sellingPrice: 7000,
            manufacturer: "Lactalis Group",
            category: "dairyProduct",
        },
        {
            id: '123',
            title: "Beurre Tiko",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4WeTFJ1lafKEMgjqaqilr308LECeGDp8WQ&s",
            purchasePrice: 3000,
            sellingPrice: 4500,
            manufacturer: "Tiko Group",
            category: "dairyProduct",
        },
        {
            id: '123',
            title: "Black Label",
            img: "https://i.pinimg.com/originals/dd/48/a4/dd48a470db125f7ff3f25c5ee1be8855.jpg",
            purchasePrice: 10000,
            sellingPrice: 15000,
            manufacturer: "Johnnie Walker",
            category: "drink",
        },
       {
        id: '123',
           title: "Fromage la vache qui rit",
           img: "https://lavachequirittpe.wordpress.com/wp-content/uploads/2016/12/vache-qui-rit.jpg?w=500",
           purchasePrice: 4000,
           sellingPrice: 5500,
           manufacturer: "Bel Group",
           category: "dairyProduct",
       },
        
        
    ];
    

    

    return (
        <DefaultLayout>
            <div className="w-full h-full p-12 bg-white md:rounded-md md:border md:shadow-md flex flex-col justify-between flex-1 overflow-hidden">
    
                <div className='flex justify-between items-center mb-6'>
                    <h1 className='text-2xl font-semibold'>Nos Produits</h1>
                    {/* Add button link if needed */}
                </div>
                <div className='flex justify-between align-bottom border-b-1 mb-6'>
                    <Tabs variant='underlined' aria-label="Tabs variants">
                        <Tab key="all" title="Tous les produits"/>
                        <Tab key="drinks" title="Boissons"/>
                        <Tab key="ppn" title="PPN"/>
                        <Tab key="dairyProducts" title="Produits Laitiers"/>
                    </Tabs>
                    
                    <Input
                        classNames={{
                            base: "max-w-full sm:max-w-[20rem] h-8",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        placeholder="Rechercher un produit..."
                        size="sm"
                        startContent={<Icon icon="material-symbols:search" width={18} height={18} />}
                        type="search"
                    />
                </div>


                <ProductList list={list}/>
                

                <div className='flex justify-center bottom-0 mt-12'>
                    <Pagination
                        disableCursorAnimation
                        showControls
                        total={10}
                        initialPage={1}
                        className="gap-2"
                        radius="full"
                        variant="light"
                        color='warning'
                    />

                </div>

                

            </div>
        </DefaultLayout>
    )
}

export default ProductsPage