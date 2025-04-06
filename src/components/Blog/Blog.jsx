import React from 'react';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleBookMark, handleMarkAsRead}) => {
    console.log(blog)
    const {cover, title, author, author_img,hashtags, 
        reading_time, 
        id } = blog
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
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

    <div className='flex'>
    <p>{hashtags[0]}</p>
    <p>{hashtags[1]}</p>
    </div>
    <div className="card-actions justify-end">
      <button onClick={()=>handleMarkAsRead(reading_time, id)} className="btn btn-primary">Mark As Read</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Blog;