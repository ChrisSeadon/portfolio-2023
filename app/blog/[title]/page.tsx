'use client'
import Image from 'next/image'
import React from 'react';
import dynamic from "next/dynamic";

export default function Page(props : any){
  const title = props.params.title;
  const Content = dynamic(() => import(`posts/${title}.mdx`))
  return ( 
    <main>
      <article className='prose lg:prose-lg xl:prose-xl dark:prose-invert p-4 justify-center items-center m-auto 3xl:mt-10 3xl:prose-2xl'>
        <Content/>
      </article>
    </main>
  )
  }