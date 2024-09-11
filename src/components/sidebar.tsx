import React, { useState } from 'react'

// motion
import {motion, useInView, useAnimation} from "framer-motion"

import { SIDENAV_ITEMS } from '@/constants/navConstants'
import { SideNavItem } from '@/types'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import {User} from "@nextui-org/user"

const Sidebar = () => {
  return (
    <div className="relative md:w-1/3 xl:w-1/6 p-3 py-12 bg-white h-screen flex-1 border-r border-zinc-200 hidden md:flex md:flex-col">
      <div className="relative flex flex-col space-y-6 w-full h-full">
        <Link
          to="/"
          className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full"
        >
          <img className="h-7 w-7 rounded-lg" src='/img/logo.png'/>
          <span className="font-bold text-xl hidden md:flex">IManager</span>
        </Link>

        <div className="flex flex-col space-y-2  md:px-6 ">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />
          })}
        </div>
      </div>
      
        
      <div className='relative bottom-0 flex items-center p-3 py-2 bg-zinc-100 rounded-lg'>
            <User   
            name="Miantsa Fanirina"
            description="Employé"
            avatarProps={{
                src: "https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/458301383_1234767847551664_6266794098498924094_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF9WFySvicoCe_OlupW7bNoohTQQH_8hPWiFNBAf_yE9YXS5Nl5eglaPQRlN0yoioucHJ2_lnsaODvowg24cn4P&_nc_ohc=RAa92sbprysQ7kNvgEEOmpF&_nc_ht=scontent.ftnr2-2.fna&_nc_gid=APCcnXNsatB3xjQFqUmX15r&oh=00_AYAmgJiSNx5wZc04YWGjfjRj8nCbFB08cr69Y1kXr4u2SQ&oe=66E6C3BD"
            }}
            />
        </div>
    </div>
  )
}

export default Sidebar

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = window.location.pathname
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen)
  }

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.path) ? 'bg-zinc-100' : ''
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-semibold text-sm  flex">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <motion.div 
                variants={{hidden: {opacity: 0, x: -20}, visible: {opacity: 1, x: 0}, exit: {opacity: 0, x: -20}}}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{duration: 0.1 ,type: "spring", stiffness: 200}}
                className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    to={subItem.path}
                    className={`text-sm ${
                      subItem.path === pathname ? 'font-bold' : ''
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                )
              })}
            </motion.div>
          )}
        </>
      ) : (
        <Link
          to={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
            item.path === pathname ? 'bg-zinc-100' : ''
          }`}
        >
          {item.icon}
          <span className="font-semibold text-sm flex">{item.title}</span>
        </Link>
      )}
    </div>
  )
}