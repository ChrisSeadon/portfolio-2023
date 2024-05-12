import Image from 'next/image'

const posts = [{title:"CS2 Skin Scraper in Python", date:"May 2024"},{title:"A Rhythm Game in a Week", date:"December 2023"},{title: "Portfolio Site Development using Next.js and Tailwind CSS", date: "August 2023/Ongoing Development"},
{title:"A Rhythm Platformer in Godot and FMOD",date:"August 2022"} ,{title:"Unity 2D Game Kit - Sound Redesign",date:"December 2021"}]

var i = true;

export default function Posts(){
    return (
        <>
        {posts.map((post) => {
    
          const slug = (post.title.replace(/ /g,'-')).toLowerCase()
    
          {if (i){
            return (
              <div key={slug} className="flex items-contain text-center justify-center lg:items-center lg:justify-between py-4 xl:mx-10">
                <div className="2xl:px-20 2xl:mx-20 max-w-xs lg:max-w-none text-2xl lg:text-3xl p-3 3xl:text-5xl">
                  <a href={`/blog/${slug}`} className="font-semibold hover:underline">{post.title}</a>
                  <p className="py-3 text-lg lg:text-xl text-gray-500">{post.date}</p>
                </div>
                <Image
                    src={`/${slug}.png`}
                    width={500}
                    height={500}
                    alt={post.title}
                    className="w-auto h-32 lg:h-64 px-2 lg:px-0 3xl:h-96"
                />
                {i = false}
              </div>
            
            )
    
          }
          else{
            return (
              <div>
                  <div key={post.title} className="flex items-contain text-center justify-center lg:items-center lg:justify-between py-4 xl:mx-10">
                    <Image
                      src={`/${slug}.png`}
                      width={500}
                      height={500}
                      alt={post.title}
                      className="w-auto h-32 lg:h-64 px-2 lg:px-0 3xl:h-96"
                    />
                  <div className="2xl:px-20 2xl:mx-20 max-w-xs lg:max-w-none text-2xl lg:text-3xl p-3 3xl:text-5xl">
                  <a href={`/blog/${slug}`} className="font-semibold hover:underline">{post.title}</a>
                    <p className="py-3 text-lg lg:text-xl text-gray-500">{post.date}</p>
                  </div>
                    {i = true}
              </div>
            </div>
            )
          }
        
        }
    
          
        })}
    
        </>
      ) }