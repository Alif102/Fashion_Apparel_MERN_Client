
const TopPicks = () => {
  return (
    <div>
        <h2 className="text-3xl youngSerif">TOP PICKS FOR YOU</h2>

    
        <img className="w-[340px]"
        src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ce419581df284bc08616ad2a00801225_9366/H46101_01_laydown.jpg"
            alt="post"></img>
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
                    <span className="text-gray-600 text-sm font-bold">1,300 Likes</span>
                </div>
        </div>
    
    </div>
    </div>
  )
}

export default TopPicks