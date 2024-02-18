export default function MyYouTubeEmbed({link}:any){
    return (
        <div className="aspect-w-16 aspect-h-9">
            <iframe className='' src={link} title="Youtube Video Player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}