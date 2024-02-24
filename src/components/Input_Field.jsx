import React from 'react'

const Input_Field = (props) => {
  return (
    <div>
       
       < input {...props}
        className='w-full px-2 py-4 border border-gray-200 focus:outline-blue-300'  />
       
    </div>
  )
}

export default Input_Field