var Title = "Chris Seadon";
var Subtitle = "Mix Engineer, Sound Designer and Videgrapher";
var Links = ["About","Blog","Contact"];

export default function Header(){
    return(
    <div className="3xl:scale-150 py-1">
        <h1 className="text-6xl dark:text-white pt-14 pb-3 text-center font-extrabold uppercase"><a href="/">{Title}</a></h1>
        <h2 className="text-2xl p-3 text-center text-gray-500">Mix Engineer, Videographer and Developer</h2>
        <h3 className="text-2xl text-center font-light text-red-500 dark:text-cyan-300 text-opacity-70 mb-4">
        {Links.map((link) => (
            <a key={link} href={`/${link.toLowerCase()}`} className="hover:underline mx-4">{link}</a>
        ))}
        </h3>
    </div>
    )}