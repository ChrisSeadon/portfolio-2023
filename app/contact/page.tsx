'use client'
import Content from "./content.mdx";
import Image from 'next/image'

export default function Page() {
  return (
    <main>
      <article className='prose md:prose-lg xl:prose-xl 3xl:prose-2xl dark:prose-invert p-4 justify-center items-center m-auto'><Content/></article>
    </main>
  )
}