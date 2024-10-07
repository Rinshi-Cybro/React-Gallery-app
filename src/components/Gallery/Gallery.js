import React from 'react';
import './Gallery.css';



function Gallery() {

    let Images = [
        {id:1, url:'/assets/img/img-1.jpg', title:'Image 1'},
        {id:2, url:'/assets/img/img-2.jpg', title:'Image 2'},
        {id:3, url:'/assets/img/img-3.jpg', title:'Image 3'},
        {id:4, url:'/assets/img/img-4.jpg', title:'Image 4'},
        {id:5, url:'/assets/img/img-5.jpg', title:'Image 5'},
        {id:6, url:'/assets/img/img-6.jpg', title:'Image 6'},
        {id:7, url:'/assets/img/img-7.jpg', title:'Image 7'},
        {id:8, url:'/assets/img/img-8.jpg', title:'Image 8'},
        {id:9, url:'/assets/img/img-9.jpg', title:'Image 9'},
        {id:10, url:'/assets/img/img-10.jpg', title:'Image 10'},
        {id:11, url:'/assets/img/img-11.jpg', title:'Image 11'},
        {id:12, url:'/assets/img/img-12.jpg', title:'Image 12'},
    ];

  return (
    <>
        <h1 className='mt-4 fw-bolder'>Gallery App</h1>
        <div className='img-gallery'>
            {Images.map((imgs, index) => (
                <div className='img-card' key={index}>
                    <img src={imgs.url} alt='Images' style={{width:'100%', height:'250px'}}/>
                    <p className='fw-bold mt-2'>{imgs.title}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default Gallery