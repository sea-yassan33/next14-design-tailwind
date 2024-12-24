import Image from "next/image";
import Link from 'next/link';
import { tv } from 'tailwind-variants';
import S08_Header from "../_components/sample08/header";
import S08_Mission from "../_components/sample08/mission";
import S08_Services from "../_components/sample08/services";
import S08WaveSection from "../_components/sample08/waveSection";
import S08Footer from "../_components/sample08/footer";

export default function Sample00() {
  const twStayles = tv({
    variants: {
      style:{
        text01:'text-cyan-400',
      },
    },
  });
  return (
    <>
      <S08_Header />
      <S08WaveSection />
      <S08_Mission />
      <S08_Services />
      <S08Footer />
    </>
  );
}