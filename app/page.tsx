import Image from 'next/image'
import Head from 'next/head'
import { Metadata } from 'next';
import { Container } from 'postcss';
import nodeTest from 'node:test';
import internal from 'stream';
import React, { Component } from 'react';
import InstagramGallery from '../components/instagramgallery/InstagramGallery';
import BigHeading from '../components/bigheading/BigHeading';
import Posts from '../components/posts/posts'
import { HighlightSpanKind } from 'typescript';

export const metadata: Metadata = {
  title: {
    absolute: "Chris Seadon - Mix Engineer, Videographer",
    default: "Chris Seadon"
  }
};
const tracks = [{title: "Dantes Revenge - Soul Fist", link:"https://open.spotify.com/track/3uAWDjitjoGeE6q3GWBvLG", credit:"mixed, mastered"},{title: "Dantes Revenge - Pretty Girl", link:"https://open.spotify.com/track/4KwWuZwPHp9jgWy4NHYBNk", credit:"mixed, mastered"},{title: "Dantes Revenge - Ease My Soul", link:"https://open.spotify.com/track/2SsM4LvF2foksufvY6Yr4C?si=7cd001404a7f4cf0",credit:"mixed, mastered"},{title: "Makes Sense - No Jokes (EP)", link:"https://open.spotify.com/album/1VlRI52Iqmt23MJ0u6feKv?si=tIafxt1iSiO0qrV_9UCeBQ"},{title: "Liberty - Snowblind", link:"https://open.spotify.com/track/0ad5xnwRjuM0UTVqREq7iW?si=1e960485aaee451f"},{title:"Liberty - Virus", link:"https://open.spotify.com/track/0N3v29j7W871pWEBoZAp3G?si=8bbb4ca4da51498f"},{title: "Liberty - I Know Now", link:"https://open.spotify.com/track/5naLWg2rpRW4d6fLqbKIKe"},{title:"mindflayer ultrakill - Car Crash in Autumn",link:"https://soundcloud.com/user-206864475/car-crash-in-autumn"},{title:"The New Blue - Late", link:"https://open.spotify.com/track/1cWtMetNGajNAgF7VRMjht?si=396c5e0a86e5414f"}]

export default function Page() {
  return (
    <main>

      <div className="justify-center items-center text-center 2xl:text-left mx-auto 2xl:mx-72 3xl:mx-96 3xl:px-64 3xl:py-32 lg:px-10">


        <BigHeading text="Mixing Discography" link="/discography" justify="text-center xl:text-left" />

        <div className={`text-xl 3xl:text-4xl 3xl:py-5 z-10 text-center text-center relative font-semibold uppercase text-black dark:text-white`}>
            <a className="bg-orange-200 bg-opacity-80 dark:bg-slate-700 dark:bg-opacity-50 px-2 align-top">Highlights</a>
        </div>

        <div className="flex flex-wrap text-white p-2 justify-center md:mx-10 lg:py-4">
          {tracks.map((track) => {
            
            const slug = (track.title.replace(/ /g,'-')).toLowerCase()

            return (

              <div key={slug} className="relative">
                <Image
                  src={`/${slug}.jpg`}
                  alt={track.title}
                  width={300}
                  height={300}
                  className="w-32 h-32 p-0.5 object-cover lg:w-48 lg:h-48 3xl:w-64 3xl:h-64"
                />
                <a href={track.link} className="absolute inset-0 flex items-center justify-center bg-slate-500 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-base lg:text-2xl font-normal text-center uppercase mx-3">{track.title}</span>
                </a>
              </div>
            
            )

          })}
        </div>
        
        <BigHeading text="Videography" link="/videography" justify="text-center xl:text-right" />
        
        {/*
        <div className="3xl:scale-150 3xl:py-48 z-0">
          <InstagramGallery />
        </div>
          */}

        <BigHeading text="Projects" link="/blog" justify="text-center xl:text-left" />
        
        <div className="justify-center overflow-clip 3xl:mx-32 4xl:mx-48">
        
          <Posts/>

        </div>
      </div>
    </main>
    
          
  )
}