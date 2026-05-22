import React from 'react'
import { cn } from '@/lib/utils'
export default function ContainerWrapper({children,className}:{
    children:React.ReactNode,
    className?:string
}) {
  return (
    <div className={cn("h-dvh max-w-7xl mx-auto px-4 md:px-8 lg:px-0",className)}>
        {children}
    </div>
  )
}
