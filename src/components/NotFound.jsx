

const NotFound = () => {
  
  return (
    <div className="h-screen flex flex-col justify-center items-center">
<h1 className="text-6xl font-bold text-black"> 404</h1>
    <h2 className=" text-5xl font-bold text-red-700">Page Not Found</h2>
    <link to ="/" className="bg-green-800 text-white text-[18xp] py-4 px-12 rounded-full hover:bg-green-800 focus:ring-[2xp] focus:ring-green-700 focus:ring-offset-[1xp] outline-none"> Go Home</link>
    </div>
  )
}

export default NotFound