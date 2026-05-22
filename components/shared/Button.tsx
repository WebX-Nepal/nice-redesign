import Link from 'next/link'
import { cn } from '@/lib/utils'
interface Props{
    className?:string,
    label:string,
    href:string,
    icon:string
    width?:number
}
import { Icon } from "@iconify/react";
export default function Button({href,label,className,icon,width=18}:Props) {
    return (
        <Link
            href={href}
            className={cn("px-6 py-2.5 h-10 md:h-12 flex items-center gap-3  text-sm md:text-base font-semibold text-white bg-[#2089CA] rounded-full hover:bg-[#1a70a8] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200",className)}
        >
             <Icon icon={icon} width={width} />
            <h1>{label}</h1>
        </Link>
    )
}
