import React from 'react'

export default function HomeHeadingItem(props) {
    const headingText = props.heading.split("").map((ele, index) => {
        return (
            <span className="home-headingHover" key={index}>
                {ele}
            </span>
        );
    })
  return (
    <div className='home-heading-word'>
        {headingText}
    </div>
  )
}
