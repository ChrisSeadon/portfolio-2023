'use client'
import Header from 'components/header/header';
import Content from "./content.mdx";
import Image from 'next/image'

export default function Page() {
  return (
    <main>
      <Header />
      <article><Content/></article>
    </main>
  )
}