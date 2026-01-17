import BigHeadingNoLink from "@/components/bigheading/BigHeadingNoLink";
export default function Page(){
    const videos = [
        {
            id:1,
            title:"'Just Snap' Game Trailer",
            url: "https://storage.cseadonproductions.co.uk/Just%20Snap%20Trailer%201%20V2.mp4"
        },
        {
            id:2,
            title:"Study Room Revision Tips",
            url:"https://storage.cseadonproductions.co.uk/Study%20Room%20Revision%20Tips.mp4"
        },
        {
            id:3,
            title:"Epiphone Les Paul Junior Setup",
            url:"https://storage.cseadonproductions.co.uk/Epiphone%20Les%20Paul%20Junior%20Setup.mp4"
        },
        {
            id:4,
            title:"Live Music Performance",
            "url":"https://storage.cseadonproductions.co.uk/Live%20Music%20Performance.mp4"
        }
    ];
    return(
        <div className="mx-10 lg:mx-32 xl:mx-72 items-center justify-between text-center min-h-screen">
            <h1 className="text-5xl dark:text-white pt-14 text-center font-extrabold">Chris Seadon</h1>
            {/* <h2 className="text-3xl dark:text-white p-3 pb-5 text-center">Video Showcase</h2> */}
            
            <div className='py-5'>
            <BigHeadingNoLink text="Video Showcase"></BigHeadingNoLink>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videos.map((video) => (
                <div key={video.id} className='aspect-w-16 aspect-h-9 bg-black'>
                <video controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
                
            ))}

           
            
                    
            </div>

                    

                    

        </div>
    )
}