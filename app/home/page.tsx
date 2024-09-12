'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '../../components/Provider'
import TitlePage from '../../components/TitlePage'
import Link from 'next/link'
import { CalendarDays, ClipboardList, Users } from 'lucide-react'

function DashboardPage() {
    const theme = useContext(ThemeContext);

    return (
        <>

            <Card className='w-full flex xl:flex-row flex-col lg:p-6 p-1 gap-6'>
                <Card className='w-full xl:w-2/3 flex flex-col lg:p-3 p-1 gap-2'>
                    <Card className='lg:p-12 p-6'>
                        <CardTitle className='uppercase flex flex-col lg:flex-row gap-6 items-center'>MES VENTES <Link href=""><Button variant='outline'><CalendarDays size={15} className="mr-2" /> Voir l'historique des ventes</Button></Link></CardTitle>
                        <div className=' mt-6 flex flex-col lg:flex-row flex-wrap gap-3 '>
                            
                            <Card className='flex flex-grow gap-3 justify-between items-center gap p-6 bg-emerald-400'>
                                <h1 className='text-white font-bold uppercase'>Effectué</h1>
                                <h1 className='text-white font-bold uppercase text-3xl lg:ml-12'>240</h1>
                            </Card>

                            
                            <Card className='flex flex-grow gap-3 justify-between items-center p-6 bg-orange-300'>
                                <h1 className='text-white font-bold uppercase'>Attente</h1>
                                <h1 className='text-white font-bold uppercase text-3xl lg:ml-12'>12</h1>
                            </Card>

                            <Card className='flex flex-grow gap-3 justify-between items-center p-6 bg-red-500'>
                                <h1 className='text-white font-bold uppercase'>Retard</h1>
                                <h1 className='text-white font-bold uppercase text-3xl lg:ml-12'>0</h1>
                            </Card>
                            
                            <Card className='flex flex-grow gap-3 justify-between items-center p-6 bg-red-300'>
                                <h1 className='text-white font-bold uppercase'>Retourné</h1>
                                <h1 className='text-white font-bold uppercase text-3xl lg:ml-12'>3</h1>
                            </Card>

                            
                            
                        </div>
                    </Card>
                    <Card className='lg:p-12 p-6'>
                        <CardTitle className='uppercase flex flex-col lg:flex-row gap-6 items-center'>Mon stock <Link href=""><Button variant='outline'><ClipboardList size={15} className="mr-2" /> Voir la liste des commandes</Button></Link></CardTitle>
                        <div className=' mt-6 flex flex-col lg:flex-row flex-wrap gap-3 '>
                        
                            <Card className='flex flex-grow gap-3 justify-between items-center gap p-6 bg-emerald-400'>
                                <h1 className='text-white font-bold uppercase'>en stock</h1>
                                <h1 className='text-white font-bold uppercase text-3xl lg:ml-12'>320</h1>
                            </Card>

                            <Card className='flex flex-grow gap-3 justify-between items-center p-6 bg-red-500'>
                                <h1 className='text-white font-bold uppercase'>en rupture</h1>
                                <h1 className='text-white font-bold uppercase text-3xl lg:ml-12'>20</h1>
                            </Card>
                            
                            <Card className='flex flex-grow gap-3 justify-between items-center p-6 bg-red-300'>
                                <h1 className='text-white font-bold uppercase'>stock faible</h1>
                                <h1 className='text-white font-bold uppercase text-3xl lg:ml-12'>3</h1>
                            </Card>
                            
                            <Card className='flex flex-grow gap-3 justify-between items-center p-6 bg-orange-300'>
                                <h1 className='text-white font-bold uppercase'>en Attente d'ajout</h1>
                                <h1 className='text-white font-bold uppercase text-3xl lg:ml-12'>12</h1>
                            </Card>
                            
                        </div>
                    </Card>
                </Card>
                <Card className='w-full xl:w-1/3 lg:p-12 p-6 flex flex-col'>
                        <CardTitle className='uppercase flex flex-col lg:flex-row gap-6 items-center flex-wrap'>Mes employés<Link href=""><Button><Users size={15} className="mr-2" /> Gerer mes employés</Button></Link></CardTitle>
                        <div className=' mt-6 flex flex-col lg:flex-row flex-wrap gap-3 flex-grow'>
                        
                            <Card className='flex flex-grow gap-3 justify-between items-center gap p-6'>
                                <h1 className='font-bold uppercase'>Total</h1>
                                <h1 className='font-bold uppercase text-3xl lg:ml-12'>320</h1>
                            </Card>

                            <Card className='flex flex-grow gap-3 justify-between items-center p-6'>
                                <h1 className='font-bold uppercase'>caissier</h1>
                                <h1 className='font-bold uppercase text-3xl lg:ml-12'>20</h1>
                            </Card>
                            
                            <Card className='flex flex-grow gap-3 justify-between items-center p-6'>
                                <h1 className='font-bold uppercase'>Livreur</h1>
                                <h1 className='font-bold uppercase text-3xl lg:ml-12'>3</h1>
                            </Card>
                            
                            <Card className='flex flex-grow gap-3 justify-between items-center p-6'>
                                <h1 className='font-bold uppercase'>Disponible</h1>
                                <h1 className='font-bold uppercase text-3xl lg:ml-12'>12</h1>
                            </Card>
                            
                        </div>
                </Card>
            </Card>

        </>
    )
}

export default DashboardPage
