import React from 'react'

const Input = (className, type, label, value, onChange) => {
  return (
    <div>
        <input type={type} className={className} label={label} value={value} onChange={onChange} />
    </div>
  )
}

export default Input