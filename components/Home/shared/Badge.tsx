interface Props {
    icon: string,
    label: string,
    className?:string
}
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
export default function Badge({ icon, label,className }: Props) {
    return (
        <div className={cn("inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2089CA] text-sm font-semibold px-4 py-2 rounded-full w-fit",className)}>
            <Icon className="text-[#2089CA]" icon={icon} width="16" />
            {label}
        </div>
    )
}
