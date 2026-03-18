import React from 'react'


type ButtonProps = {
    children: React.ReactNode;
}


const SecondaryButton = ({children} : ButtonProps) => {
  return (
    <button className="secondary-button">
        {children}
    </button>
  )
}

export default SecondaryButton