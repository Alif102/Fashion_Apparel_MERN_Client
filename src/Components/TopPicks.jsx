
const TopPicks = () => {
    const features = [
        {
            id : 1,
            title: "Scribble Fleece Hoodie",
          icon: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ce419581df284bc08616ad2a00801225_9366/H46101_01_laydown.jpg",
      
          likes: "1,300 Likes",
        },
        {
          id : 2,
          title: "Cargo Fleece Hoodie",
        icon: 
         "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/515b7b47f7e24d89badcd4b328b31248_9366/essentials-fleece-3-stripes-full-zip-hoodie.jpg",
    
        likes: "1,350 Likes",
      },
      {
        id : 3,
        title: "Stripe Shoe",
      icon:
       "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/e4c64ff5bce04271b12aaf9c0122539e_9366/HQ2168_01_standard.jpg",
  
      likes: "1,100 Likes",
    },
    {
      id : 4,
      title: "Adicolor Sweetshirt",
    icon: 
     "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/623bc1b981164d6a84802e4dfa240a0c_9366/adicolor-essentials-crew-sweatshirt.jpg",

    likes: "1,200 Likes",
  },
  {
    id : 5,
    title: "Long Sleeve Tee",
  icon: 
   "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/1aa27445c6cb4521966580c157ac4b0a_9366/adizero-running-long-sleeve-tee.jpg",
  likes: "1,300 Likes",
},
{
  id : 4,
  title: "Classics Track Sportswear",
icon: 
 "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/222a970bac1244f18446af9f00430579_9366/lift-your-mind-tee.jpg",

likes: "1,300 Likes",
},
       
      ];
  return (
    <div>
      <h2 className="text-3xl text-center mt-16 m-10 youngSerif text-[#151875] font-bold">TOP PICKS FOR YOU</h2>

    {/* <div>

        <img className="w-[340px]"
        src={features.icon}
            alt="post"></img>
            <h2>{features.title}</h2>
        <div className="px-6 pt-4">
            <div className="mb-2">
                <div className="flex items-center">
                    <span className="mr-3 inline-flex items-center cursor-pointer">
                        <svg className="text-gray-700 inline-block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </span>
                    <span className="mr-3 inline-flex items-center cursor-pointer">
                        <svg className="text-gray-700 inline-block h-7 w-7 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </span>
                    <span className="text-gray-600 text-sm font-bold">{features.likes}</span>
                </div>
        </div>
    </div>
    </div> */}
    <div className="grid mb-9 max-w-[1000px] lg:grid-cols-4 mx-auto gap-5 justify-center  ">
{
    features.map ((feature) => {

        return (

           <div key={feature.id}>

        <img className="w-[340px]"
        src={feature.icon}
            alt="post"></img>
            <h2 className="text-[#151875] font-bold text-center">{feature.title}</h2>
        <div className="px-6 pt-4">
            <div className="mb-2">
                <div className="flex items-center">
                    <span className="mr-3 inline-flex items-center cursor-pointer">
                        <svg className="text-gray-700 inline-block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </span>
                    <span className="mr-3 inline-flex items-center cursor-pointer">
                        <svg className="text-gray-700 inline-block h-7 w-7 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </span>
                    <span className="text-gray-600 text-sm font-bold">{feature.likes}</span>
                </div>
        </div>
    </div>
    </div>
        )
    })
}
</div> 


    </div>
  )
}

export default TopPicks

{/* <div className="grid lg:grid-cols-4 mx-auto gap-5 justify-center  ">
{
    features.map ((feature) => {

        return (

           <div>

        <img className="w-[340px]"
        src={features.icon}
            alt="post"></img>
            <h2>{features.title}</h2>
        <div className="px-6 pt-4">
            <div className="mb-2">
                <div className="flex items-center">
                    <span className="mr-3 inline-flex items-center cursor-pointer">
                        <svg className="text-gray-700 inline-block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </span>
                    <span className="mr-3 inline-flex items-center cursor-pointer">
                        <svg className="text-gray-700 inline-block h-7 w-7 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </span>
                    <span className="text-gray-600 text-sm font-bold">{features.likes}</span>
                </div>
        </div>
    </div>
    </div>
        )
    })
}
</div> */}