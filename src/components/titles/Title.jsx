import React from 'react'
import './title.css'

const Title = () => {
  return (
    <div className='title-Container'>
        <div className="title-TextContainer">Hi</div>
        <div className="title-ImgContainer">
            <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwcGVyc29uJTIwbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="person" 
                className='title-Img'
            />
        </div>
    </div>
  )
}

// https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwcGVyc29uJTIwbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60

export default Title