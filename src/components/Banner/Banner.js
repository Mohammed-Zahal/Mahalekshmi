import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div
            style={{ backgroundImage: "url(image/silk-sarees.jpg)"}}
            
            //  `url(${movie ? imgUrl + movie.backdrop_path : ""})`
            className='banner mb-5' >
                {/* <img src="image/silk-sarees.jpg" alt=""></img> */}
            <div className='content'>
                <h1 className='title'>The  World's Largest Silks Sarees Showroom Network</h1>
                <div className='discription'>
                    <p className='overview'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                </div>
                <div className='banner_button'>

                    <button className='button'><p>View More</p></button>

                </div>
            </div>
        </div>
    )
}

export default Banner