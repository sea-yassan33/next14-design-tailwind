"use client";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from 'react';
import { useState, useEffect } from "react";

interface Item{
  link: string;
  imageUrl: string;
  title: string;
  description: string;
}

function CollectList(){
  const twStayles = {
    //main
    mainItem01:"p-4 md:w-1/3",
    mainItem02:"h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden",
    mainItemImg:"lg:h-48 md:h-36 w-full object-cover object-center",
    mainItemTxtH1:"title-font text-lg font-medium text-gray-900 mb-3",
    mainItemTxtH2:"tracking-widest text-xs title-font font-medium text-gray-400 mb-1",
    mainItemTxt:"leading-relaxed mb-3",
    mainTitle:"text-5xl font-bold tracking-widest bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent",
  }

  // 状態管理
  const [items, setItems] = useState<Item[]>([]);

  // JSONデータを取得して設定
  useEffect(() => {
    fetch('/data/colect.json')
    .then(response => response.json())
    .then(data => setItems(data))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return(
    <>
      {items.map((item, index) => (
        <div className={`${twStayles.mainItem01}`} key={index}>
          <div className={`${twStayles.mainItem02}`}>
            <Link href={item.link}>
              <Image className={`${twStayles.mainItemImg}`} src={item.imageUrl} alt="" width={4000} height={1200}/>
            </Link>
            <div className="p-6">
              <Link href={item.link} className={`${twStayles.mainItemTxtH1}`}>{item.title}</Link>
              <p className={`${twStayles.mainItemTxt}`}>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default function Colllection(){
  return(
    <>
      <Suspense>
        <CollectList />
      </Suspense>
    </>
  );
}