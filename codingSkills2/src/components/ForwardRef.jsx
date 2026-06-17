import React from 'react'

const ForwardRef = () => {
  return (
    <div>
        <input type="text" ref={inputRef} />
    </div>
  )
}

export default ForwardRef