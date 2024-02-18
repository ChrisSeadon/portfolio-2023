import Image from 'next/image'
import BigHeading from '@/components/bigheading/BigHeading'

const tracks = [{title: "Liberty - Snowblind", link:"https://open.spotify.com/track/0ad5xnwRjuM0UTVqREq7iW?si=1e960485aaee451f",credit:"engineered, produced, mixed, mastered"},{title:"Liberty - Virus", link:"https://open.spotify.com/track/0N3v29j7W871pWEBoZAp3G?si=8bbb4ca4da51498f",credit:"engineered, produced, mixed, mastered"},{title:"mindflayer ultrakill - Car Crash in Autumn",link:"https://soundcloud.com/user-206864475/car-crash-in-autumn",credit:"engineered, produced, mixed, mastered"},{title:"Rebecca McIntosh - Best Man", link:"https://open.spotify.com/track/6Omfjcp9tnwUHHbcQWtz23?si=4b6bc7d1273a45c0",credit:"Acoustic Guitar"},{title:"The New Blue - Late", link:"https://open.spotify.com/track/1cWtMetNGajNAgF7VRMjht?si=396c5e0a86e5414f",credit:"engineered, produced, mixed, mastered"},{title: "Liberty - I Know Now", link:"https://open.spotify.com/track/5naLWg2rpRW4d6fLqbKIKe",credit:"engineered*, mixed, mastered"},{title:"Chris Seadon - Sh••", link:"https://open.spotify.com/track/2XVuTk8SbYEe0SshK0kBGh?si=e758f98eae8e47d0",credit:"engineered*, produced, mixed, mastered"},{title: "The Antibody - My Little (Human) Pal", link:"https://open.spotify.com/track/0DqWE2PXTFwjWPHqfH8aV6?si=17c216ce2cf947dc", credit:"engineered, produced, mixed, mastered"}]


export default function Page(){
    return(
        <div>
          <div className='scale-90 3xl:pt-5 3xl:mt-5'>
            <BigHeading text='Discography'/>
          </div>
          <div className="flex-col text-white py-4 3xl:flex-wrap justify-center lg:mx-36 2xl:mx-96 lg:py-4 text-right">
            {tracks.map((track) => (
              <div key={track.title} className="relative">
                <Image
                  src={`/${track.title}.jpg`}
                  alt={track.title}
                  width={500}
                  height={500}
                  className="w-32 h-32 object-cover md:w-48 md:h-48 lg:w-64 lg:h-64 3xl:w-96 3xl:h-96"
                />
                <span className="absolute inset-0 text-[12px] sm:text-sm md:text-base items-center justify-center text-base md:text-2xl 3xl:text-3xl font-normal text-right uppercase mx-auto">{track.title}
                  <br></br>
                  <span className='text-slate-500 text-[12px] sm:text-[14px] 3xl:text-2xl'>{track.credit}</span>
                </span>

                <a href={track.link} className="absolute inset-0 flex items-center justify-center bg-slate-500 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity">
                  
                </a>
              </div>
            ))}
          
            <span className='text-slate-500 p-4 text-[14px] 3xl:text-2xl'>*Partial</span>

          </div>
        </div>
    
    )
}