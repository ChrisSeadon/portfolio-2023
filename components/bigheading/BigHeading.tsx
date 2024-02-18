export default function BigHeading({text,link,justify}:any){
    return (
        <div className={`text-3xl z-10 text-center ${justify} relative md:text-4xl lg:text-5xl 3xl:text-7xl font-semibold uppercase p-3 pt-4 lg:py-8 text-black dark:text-white`}>
            <a href={link} className="bg-orange-200 bg-opacity-80 hover:bg-opacity-100 dark:bg-slate-700 dark:bg-opacity-80 dark:hover:bg-opacity-100 px-2 align-top">{text}</a>
        </div>
    )
    
}