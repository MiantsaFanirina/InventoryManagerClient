import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { BookUser, Boxes, CalendarArrowDown, CalendarDays, ChevronDownIcon, ClipboardList, DollarSign, Home, ListVideo, Menu, Mic2, Music, PackagePlus, Play, RadioIcon, SquareStack, User, UserRoundPlus, Users, Wallet, Warehouse } from "lucide-react";
import Link from "next/link";
import * as React from "react";

type Menu = {
    label: string
    name: string
    icon: React.ReactNode
    submenu?: Submenu[]
    href: string
}

type Submenu = {
    name: string
    icon: React.ReactNode
    href: string
}

export function SidebarMenu() {
    const menus: Menu[] = [
        {
            label: "Dashboard",
            name: "Acceuil",
            icon: <Home size={15} className="mr-2" />,
            href: "/home",
        },
        {
            label: "Dashboard",
            name: "Mes produits",
            icon: <Boxes size={15} className="mr-2" />, 
            href: "/products",
        },
        
        {
            label: "Stocks",
            name: "Ajouter",
            icon: <PackagePlus size={15} className="mr-2" /> , 
            href: "/home",
        },
        {
            label: "Stocks",
            name: "Commandes",
            icon: <CalendarArrowDown size={15} className="mr-2" />,
            href: "/home/playlist",
            submenu: [
                {
                    name: "Liste",
                    icon: <ClipboardList size={15} className="mr-2" />,
                    href: "/home/",
                },
                {
                    name: "Mes fournisseurs",
                    icon: <Warehouse size={15} className="mr-2" />,
                    href: "/home/",
                }
            ],
        },
        {
            label: "Caisse",
            name: "Vendre",
            icon: <DollarSign size={15} className="mr-2" />,
            href: "/home/",
        },
        {
            label: "Caisse",
            name: "Historique",
            icon: <CalendarDays size={15} className="mr-2" />,
            href: "/home/",
        },
        
        {
            label: "Mon magasin",
            name: "Mes employés",
            icon: <Users size={15} className="mr-2" />,
            href: "/home/",
            submenu: [
                {
                    name: "Ajouter",
                    icon: <UserRoundPlus size={15} className="mr-2" />,
                    href: "/home/",
                },
                {
                    name: "Liste",
                    icon: <BookUser size={15} className="mr-2" />,
                    href: "/home/",
                }
            ]
        },
        {
            label: "Mon magasin",
            name: "Mon portefeuille",
            icon: <Wallet size={15} className="mr-2" />,
            href: "/home/",
        }
    ];

    const uniqueLabels = Array.from(new Set(menus.map((menu) => menu.label)));

    return (
        <ScrollArea className="h-screen lg:w-48 sm:w-full rounded-md">
            <div className="md:px-4 sm:p-0 mt-5 ">
                {uniqueLabels.map((label, index) => (
                    <React.Fragment key={label}>
                        {label && (
                            <p className={`mx-4 mb-3 text-xs text-left tracking-wider font-bold text-slate-300 ${index > 0 ? 'mt-10' : ''}`}>
                                {label}
                            </p>
                        )}
                        {menus
                            .filter((menu) => menu.label === label)
                            .map((menu) => (
                                <React.Fragment key={menu.name}>
                                    {menu.submenu && menu.submenu.length > 0 ? (
                                        <Accordion
                                            key={menu.name}
                                            type="single"
                                            className="mt-[-10px] mb-[-10px] p-0 font-normal"
                                            collapsible
                                        >
                                            <AccordionItem value="item-1" className="m-0 p-0 font-normal">
                                                <AccordionTrigger>
                                                    <a key={menu.name} className="w-full flex justify-start text-xs font-normal h-10 bg-background my-2 items-center p-4 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-background rounded-md">
                                                        <div className={cn("flex justify-between w-full [&[data-state=open]>svg]:rotate-180")}>
                                                            <div className="flex">
                                                                <div className="w-6">{menu.icon}</div>
                                                                {menu.name}
                                                            </div>
                                                            <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                                                        </div>
                                                    </a>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    {menu.submenu.map((submenu) => (
                                                        <Link key={submenu.name} href={submenu.href} className="text-gray-400 mt-0 mb-0 flex text-xs h-10 bg-white dark:bg-background dark:hover:bg-primary dark:hover:text-background my-2 items-center p-4 hover:bg-primary hover:text-white rounded-md">
                                                            <div className="w-6">{submenu.icon}</div>
                                                            {submenu.name}
                                                        </Link>
                                                    ))}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    ) : (
                                        <div key={menu.name}>
                                            <Link href={menu.href} className="flex text-xs h-10 bg-white dark:bg-background my-2 items-center p-4 hover:bg-primary dark:hover:bg-primary dark:hover:text-background hover:text-white rounded-md">
                                                <div className="w-6">{menu.icon}</div>
                                                {menu.name}
                                            </Link>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                    </React.Fragment>
                ))}
            </div>
        </ScrollArea>
    );
}
