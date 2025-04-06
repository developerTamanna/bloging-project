import React from 'react';

const Blog = ({blog}) => {
    console.log(blog)
    const {cover, title} = blog
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
    <h2 className="card-title">{title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Mark As Read</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Blog;