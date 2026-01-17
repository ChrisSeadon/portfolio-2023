export default function BigHeadingNoLink({text,justify}:any){
    return (
        <div className={`text-3xl z-10 text-center ${justify} relative font-semibold uppercase p-3 pt-4 text-black dark:text-white`}>
            <a className="bg-orange-200 bg-opacity-80 dark:bg-slate-700 dark:bg-opacity-80 px-2 align-top">{text}</a>
        </div>
    )
    
}