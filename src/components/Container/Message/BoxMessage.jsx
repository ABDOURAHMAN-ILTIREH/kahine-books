import React from 'react'



const BoxMessage = ({own}) => {

  return (
      <div className="box_message">
        <p className={own ? "message own" : "message"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, corrupti?</p>
        <span className='hour_content'>8 hour ago</span>
      </div>

  )
}

export default BoxMessage