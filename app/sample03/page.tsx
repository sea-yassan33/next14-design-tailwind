import React from "react"
import Image from "next/image"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const twStyles = {
  
}

export default function Sample02(){
  return(
    <Menu>
  <MenuButton className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
    My account
  </MenuButton>
  <MenuItems className="mt-2 w-48 bg-white shadow-lg rounded-md py-1 border border-gray-200" anchor="bottom">
    <MenuItem>
      <a className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-gray-900 focus:bg-blue-100 focus:outline-none" href="/settings">
        Settings
      </a>
    </MenuItem>
    <MenuItem>
      <a className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-gray-900 focus:bg-blue-100 focus:outline-none" href="/support">
        Support
      </a>
    </MenuItem>
    <MenuItem>
      <a className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-gray-900 focus:bg-blue-100 focus:outline-none" href="/license">
        License
      </a>
    </MenuItem>
  </MenuItems>
</Menu>
  )
}

