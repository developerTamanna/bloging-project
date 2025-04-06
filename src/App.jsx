
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbaar/Navbar'

function App() {
     const [Bookmarked, setBookmarked]=useState([]);
     const [readingCount, setReadingCount] = useState(0)         
const handleBookMark = (blog)=>{    //bookmark function
  console.log('click',blog)

  const newBookMarked = ([...Bookmarked, blog])
  setBookmarked(newBookMarked)
  // console.log(newBookMarked)
}

// time function to read btn


const handleMarkAsRead=(time, id)=>{
console.log('hello time',time)
const newTime = readingCount + time;
setReadingCount(newTime)
// console.log(id)
handleRemoveBookmarked(id)
}

console.log(readingCount)





// remove bookmarked list add from btn

const handleRemoveBookmarked=(id)=>{
      const  remainingBookMark = Bookmarked.filter((mark)=>mark.id!==id)
        // console.log(remainingBookMark)
        setBookmarked(remainingBookMark)
}




  return (
    <>
       
      <Navbar></Navbar>

     


      <div className='main-content grid grid-cols-[2fr_1fr] gap-4 text-center mt-10 '>
  
        <div className="left-container">
            {/* <h2>Total: 0</h2> */}
            <Blogs
            
            handleBookMark={handleBookMark}
            handleMarkAsRead ={handleMarkAsRead}
            ></Blogs>
        </div>
        <div className="right-container space-y-4 ">
              <h2 className='text-xl font-semibold border-1 border-gray-300 rounded-md shadow-2xl'>Reading time: {readingCount}</h2>
              <h2 className='text-xl font-semibold border-1 border-gray-300 rounded-md shadow-2xl'>Bookmark count: {Bookmarked.length}</h2>


              <div className='mt-10'>
  {Bookmarked.map(marked => (
    <div key={marked.id} className="bg-gray-100 p-4 m-2 my-10 rounded-lg shadow-md">
      <h3 className="text-sm font-semibold">{marked.title}</h3>

      <img className='w-20 h-20 mx-auto rounded-full object-cover mb-3 mt-2' src={marked.author_img}></img>
      <small className='text-gray-500 font-semibold'>{marked.author}</small>
      
    </div>
  ))}
</div>

        </div>
      </div>
     
    </>
  )
}

export default App
