import React from "react"
import Image from "next/image"
import { tv } from 'tailwind-variants';

const tvContaner = tv({
  variants:{
    style:{
      cont1: 'container mx-auto flex px-1 py-3 items-center justify-center flex-colcontainer flex-col',
      img: 'lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded',
      cont2:'text-center lg:w-2/3 w-full',
      h1:'title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900',
    },
  },
});

export default function Sample04(){
  return(
    <section className={tvContaner({style:'cont1'})}>
      {/* <Image src="https://dummyimage.com/600x600" height={600} width={600} alt="img"/> */}
      <iframe width="100%" height="500" src="https://lookerstudio.google.com/embed/reporting/21454a81-dd7e-4581-ae55-1c2089fb5f25/page/AYQCE" sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>
      <div className="text-center lg:w-2/3 w-full">
        <h1 className={tvContaner({style:'h1'})}>Microdosing synth tattooed vexillologist</h1>
        <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
      </div>
    </section>
  )
}