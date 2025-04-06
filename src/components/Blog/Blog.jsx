import React from 'react';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleBookMark, handleMarkAsRead}) => {
    console.log(blog)
    const {cover, title, author, author_img,hashtags, 
        reading_time, 
        id, 
        description } = blog
    return (
        <div className='mt-10'>
            {/* <img src={cover} alt=""></img> */}
                   
          
            <div className="card bg-base-100 shadow-sm w-full h-full">
  <figure className="h-48 overflow-hidden">
    <img
      className="w-full h-full object-cover"
      src={cover}
      alt="Cover"
    />
  </figure>
  <div className="card-body">
  

      <div>
        <h3 className='text-gray-600 font-semibold'>
           {author}
           <img className='w-32 h-32 mx-auto rounded-full object-cover mb-3 mt-2' src={author_img}></img>
        </h3>
       <button onClick={()=>handleBookMark(blog)}> <FaBookmark size={25} /></button>
      </div>


    <h2 className="card-title">{title}</h2>
    <p className='text-sm font-normal text-gray-600 mt-2'>{
      description
    }</p>

    <div className='flex mt-2 gap-2 '>
    <p className='border-1 border-gray-300 shadow-md text-xs font-serif'>{hashtags[0]}</p>
    <p className='border-1 border-gray-300 shadow-md text-xs font-serif'>{hashtags[1]}</p>
    </div>
    <div className="card-actions justify-end mt-2">
      <button onClick={()=>handleMarkAsRead(reading_time, id)} className="btn btn-primary">Mark As Read</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Blog;