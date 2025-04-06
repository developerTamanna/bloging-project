import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

 const[blogs,setBlogs] = useState([]);

     console.log(blogs)
    useEffect(()=>{
      fetch('blogs.json')
      .then(res=>res.json())
      .then(data=> setBlogs(data))
       
    },[])
    return (
        <div>

            <h1 className='text-2xl font-semibold border-1 border-gray-300 rounded-b-md shadow-2xl'>Total: {blogs.length}</h1>
            
               <div className='all-box grid grid-cols-2 gap-4'>
               {

            blogs.map(blog=><Blog
            key={blog.id}
            blog ={blog}
            ></Blog>)
                }
               </div>
        </div>
    );
};

export default Blogs;