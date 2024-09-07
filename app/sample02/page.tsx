import React from "react"
import Image from "next/image"
import { tv } from 'tailwind-variants';

const twStyles = {
  container01: "container px-5 py-5 mx-auto",
  container02: "flex flex-wrap -m-4",
  split:"lg:w-1/4 md:w-1/2 p-4 w-full",
}

const tvButton = tv({
  base: 'py-1.5 px-4 transition-colors border font-medium rounded-lg disabled:opacity-50 m-1',
  variants: {
    color: {
      black: 'bg-gray-50 active:bg-gray-200 border-gray-200 text-gray-900 hover:bg-gray-100',
      green: 'bg-green-600 active:bg-green-800 border-green-700 text-white hover:bg-green-700',
      blue: 'bg-gray-50 active:bg-blue-800 border-gray-200 hover:text-white text-blue-600 hover:border-blue-700 hover:bg-blue-600',
      red:'bg-gray-50 active:bg-red-800 border-gray-200 hover:text-white text-red-600 hover:border-red-700 hover:bg-red-600',
    },
  },
});

export default function Sample03(){
  return(
    <section className={`${twStyles.container01}`}>
      <div className={`${twStyles.container02}`}>
        <div className={`${twStyles.split}`}>
          <p>ボタン・サンプル</p>
          <div className="p-2">
            <button className={`${tvButton({color:'black'})}`}>ボタン1</button>
            <button className={`${tvButton({color:'green'})}`}>ボタン2</button>
            <button className={`${tvButton({color:'blue'})}`}>ボタン3</button>
            <button className={`${tvButton({color:'red'})}`}>ボタン4</button>
          </div>
        </div>
        <div className={`${twStyles.split}`}>
          <p className="mb-2">サンプル２</p>
        </div>
      </div>
    </section>
  )
}