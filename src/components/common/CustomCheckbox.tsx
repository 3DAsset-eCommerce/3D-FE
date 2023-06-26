import React from 'react'

type CustomCheckboxProps = {
  id: string
  className?: string
  size?: number
  children?: React.ReactNode
}

const sizes: Record<number, string> = {
  2: 'w-[0.2rem] h-[0.2rem]',
  4: 'w-[0.4rem] h-[0.4rem]',
  8: 'w-[0.8rem] h-[0.8rem]',
  12: 'w-[1.2rem] h-[1.2rem]',
  16: 'w-[1.6rem] h-[1.6rem]',
  24: 'w-[2.4rem] h-[2.4rem]',
  32: 'w-[3.2rem] h-[3.2rem]',
}

function CustomCheckbox({ id, className, size = 32, children }: CustomCheckboxProps) {
  const sizeClass = sizes[size] || ''
  return (
    <>
      <input type="checkbox" id={id} className="hidden" />
      <label htmlFor={id} className={`flex items-center ${className}`}>
        <div className={`mx-auto ${sizeClass} bg-checkbox-off bg-cover`}></div>
        {children}
      </label>
    </>
  )
}

export default CustomCheckbox
