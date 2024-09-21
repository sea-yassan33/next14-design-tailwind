import React from "react"
import Image from "next/image"
import { tv } from 'tailwind-variants';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const tvContaner = tv({
  variants:{
    style:{
      cont1: "container px-5 py-5 mx-auto",
      cont2: "flex flex-wrap -m-4",
      split:"lg:w-1/2 md:w-1/2 p-4 w-full h-52",
    },
  },
});

const tvList2 = tv({
  variants:{
    style:{
      st01:'mx-auto w-full divide-y rounded-xl bg-white border border-blue-400',
      st02:'group flex w-full items-center justify-between',
      st03:'text-sm/6 font-medium text-black group-data-[hover]:text-black/80',
      st04:'size-7 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180',
    }
  }
});

function Icon01(){
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

function Icon02(){
  return(
    <div className={tvList2({style:'st01'})}>
      <Disclosure as="div" className="p-6" defaultOpen={false}>
        <DisclosureButton className={tvList2({style:'st02'})}>
          <span className={tvList2({style:'st03'})}>
            右のボタンを押してください
          </span>
          <ChevronDownIcon className={tvList2({style:'st04'})}/>
        </DisclosureButton>
        <DisclosurePanel className="mt-2 text-black/50">
          説明文です。アコーディオン機能。
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}

export default function Sample03(){
  return(
    <section className={tvContaner({style:'cont1'})}>
      <div className={tvContaner({style:'cont2'})}>
        {/* リスト１ */}
        <div className={tvContaner({style:'split'})}>
          <Icon01/>
        </div>
        {/* リスト2 */}
        <div className={tvContaner({style:'split'})}>
          <Icon02/>
        </div>
      </div>
    </section>
  )
}

