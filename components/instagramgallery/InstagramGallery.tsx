'use client'
import { InstagramEmbed } from 'react-social-media-embed';

export default function InstagramGallery(){
    return(
        <div className="flex flex-wrap p-1 xl:flex-nowrap justify-center text-center rounded-lg">
            <div className="flex rounded-md p-1 shrink h-[42rem]"><InstagramEmbed url="https://www.instagram.com/reel/CwayCuMM6I6" width={350} />
            </div>
            <div className="flex rounded-md p-1 shrink h-[42rem]"><InstagramEmbed url="https://www.instagram.com/reel/CvmVnAyI9Ct" width={350} />
            </div>
            <div className="flex rounded-md p-1 shrink h-[42rem]"><InstagramEmbed url="https://www.instagram.com/reel/Cvz9mfvNOeP" width={350} />
            </div>
        </div>
    )
}