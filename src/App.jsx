
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbaar/Navbar'

function App() {
  

  return (
    <>
       
      <Navbar></Navbar>

     


      <div className='main-content grid grid-cols-[2fr_1fr] gap-4 text-center mt-10 '>
  
        <div className="left-container">
            {/* <h2>Total: 0</h2> */}
            <Blogs></Blogs>
        </div>
        <div className="right-container space-y-4 ">
              <h2 className='text-xl font-semibold border-1 border-gray-300 rounded-md shadow-2xl'>Reading time: 0</h2>
              <h2 className='text-xl font-semibold border-1 border-gray-300 rounded-md shadow-2xl'>Bookmark count: 0</h2>
        </div>
      </div>
     
    </>
  )
}

export default App
