import Image from "next/image"
import { tv } from 'tailwind-variants';
import FilterTabs from "../_components/FilterTabs";
import BlogPosts from "../_components/BlogPosts";

const tvContaner = tv({
  variants:{
    style:{
      cont1: '',
    },
  },
});

export default function Sample07(){
  return (
    <>
      <FilterTabs /> 
      <BlogPosts />
    </>
  )
}