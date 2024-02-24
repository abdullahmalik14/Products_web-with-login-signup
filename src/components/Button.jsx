import React from 'react'

const Button = (props) => {
  return (
    <>
        
              <button className='w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600' {...props}>
                {props.children}
              </button>
            
    </>
  )
}

export default Button