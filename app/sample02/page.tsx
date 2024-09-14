import React from "react"
import Image from "next/image"
import { tv } from 'tailwind-variants';
// スタイル
const twStyles = {
  container01: "container px-5 py-5 mx-auto",
  container02: "flex flex-wrap -m-4",
  split:"lg:w-1/4 md:w-1/2 p-4 w-full",
  botton2: "fill-current mr-1.5 text-white",
}
// Button
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
// Tag
const tvButton2 = tv({
  base: 'inline-flex items-center rounded-full px-2 text-sm text-white py-1 font-medium m-1',
  variants:{
    color:{
      green: 'bg-green-600',
      purple: 'bg-purple-600',
      gray: 'bg-gray-500',
    },
  },
});
// Label
const tvLabel1= tv({
  base: 'border rounded-full px-4 text-sm py-0.5 m-1',
  variants:{
    color:{
      gray: 'border-gray-300 text-gray-700',
      gray2: 'border-gray-200 text-gray-700',
      blue: 'border-blue-600 text-blue-600',
      green: 'border-green-600 text-green-600',
      yellow: 'border-yellow-600 text-yellow-600',
      red: 'border-red-600 text-red-600',
    },
  },
});
// Agree Badges
const tvBatti1 = tv({
  base:'rounded-full text-white px-3 py-1 text-xs uppercase font-medium m-1',
  variants:{
    color:{
      gray: 'bg-gray-800',
      indigo: 'bg-indigo-500',
      green: 'bg-green-500',
      red: 'bg-red-500',
      yellow: 'bg-yellow-500',
      blue: 'bg'
    }
  },
});

export default function Sample03(){
  return(
    <section className={`${twStyles.container01}`}>
      <div className={`${twStyles.container02}`}>
        {/* Button */}
        <div className={`${twStyles.split}`}>
          <p>Button</p>
          <div className="p-2">
            <button className={`${tvButton({color:'black'})}`}>button1</button>
            <button className={`${tvButton({color:'green'})}`}>button2</button>
            <button className={`${tvButton({color:'blue'})}`}>button3</button>
            <button className={`${tvButton({color:'red'})}`}>button4</button>
          </div>
        </div>
        {/* Tag */}
        <div className={`${twStyles.split}`}>
          <p className="mb-2">Tag</p>
          <span className={`${tvButton2({color:'green'})}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`${twStyles.botton2}`} viewBox="0 0 16 16" width="16" height="16">
              <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
            </svg>
            Open
          </span>
          <span className={`${tvButton2({color:'purple'})}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`${twStyles.botton2}`} viewBox="0 0 16 16" width="16" height="16">
              <path d="M11.28 6.78a.75.75 0 00-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3.5-3.5z"></path>
              <path fillRule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"></path>
            </svg>
            Cheak
          </span>
          <span className={`${tvButton2({color:'gray'})}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`${twStyles.botton2}`} viewBox="0 0 16 16" width="16" height="16">
              <path fillRule="evenodd" d="M6.749.097a8.054 8.054 0 012.502 0 .75.75 0 11-.233 1.482 6.554 6.554 0 00-2.036 0A.75.75 0 016.749.097zM4.345 1.693A.75.75 0 014.18 2.74a6.542 6.542 0 00-1.44 1.44.75.75 0 01-1.212-.883 8.042 8.042 0 011.769-1.77.75.75 0 011.048.166zm7.31 0a.75.75 0 011.048-.165 8.04 8.04 0 011.77 1.769.75.75 0 11-1.214.883 6.542 6.542 0 00-1.439-1.44.75.75 0 01-.165-1.047zM.955 6.125a.75.75 0 01.624.857 6.554 6.554 0 000 2.036.75.75 0 01-1.482.233 8.054 8.054 0 010-2.502.75.75 0 01.858-.624zm14.09 0a.75.75 0 01.858.624 8.057 8.057 0 010 2.502.75.75 0 01-1.482-.233 6.55 6.55 0 000-2.036.75.75 0 01.624-.857zm-13.352 5.53a.75.75 0 011.048.165 6.542 6.542 0 001.439 1.44.75.75 0 01-.883 1.212 8.04 8.04 0 01-1.77-1.769.75.75 0 01.166-1.048zm12.614 0a.75.75 0 01.165 1.048 8.038 8.038 0 01-1.769 1.77.75.75 0 11-.883-1.214 6.543 6.543 0 001.44-1.439.75.75 0 011.047-.165zm-8.182 3.39a.75.75 0 01.857-.624 6.55 6.55 0 002.036 0 .75.75 0 01.233 1.482 8.057 8.057 0 01-2.502 0 .75.75 0 01-.624-.858z"></path>
            </svg>
            Blank
          </span>
        </div>
        {/* Label */}
        <div className={`${twStyles.split}`}>
          <p>Label</p>
          <div className="mb-2 flex flex-wrap whitespace-nowrap">
            <span className={`${tvLabel1({color:'gray'})}`}>Lavel1</span>
            <span className={`${tvLabel1({color:'gray2'})}`}>Lavel2</span>
            <span className={`${tvLabel1({color:'blue'})}`}>Lavel3</span>
            <span className={`${tvLabel1({color:'green'})}`}>Lavel4</span>
            <span className={`${tvLabel1({color:'yellow'})}`}>Lavel5</span>
            <span className={`${tvLabel1({color:'red'})}`}>Lavel6</span>
          </div>
        </div>
        {/* Agree Badges */}
        <div className={`${twStyles.split}`}>
          <p>Agree Badges</p>
          <div className="p-2 flex flex-wrap whitespace-nowrap">
            <span className={`${tvBatti1({color:'gray'})}`}>Default</span>
            <span className={`${tvBatti1({color:'indigo'})}`}>Primary</span>
            <span className={`${tvBatti1({color:'green'})}`}>Success</span>
            <span className={`${tvBatti1({color:'red'})}`}>Danger</span>
            <span className={`${tvBatti1({color:'yellow'})}`}>Warning</span>
            <span className={`${tvBatti1({color:'blue'})}`}>Info</span>
          </div>
        </div>
      </div>
    </section>
  )
}