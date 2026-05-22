import Button from "@/components/shared/Button"
interface Props {
    title: string,
    desc: string,
    href: string,
    icon: string,
    btntitle: string
}
export default function CTABanner({ desc, href, icon, title, btntitle }: Props) {
    return (
        <div className=" flex flex-col lg:flex-row items-center justify-between gap-4 bg-linear-to-b from-[#037ecb]  to-[#2089CA] rounded-xl px-6 py-6">
            <div>
                <p className="text-white font-bold text-xl">
                    {title}
                </p>
                <p className="text-gray-100 text-xs mt-0.5">
                    {desc}
                </p>
            </div>
            <Button
                href={href}
                icon={icon}
                label={btntitle}
                className="bg-white text-[#2089CA] hover:bg-gray-100"
            />
        </div>
    )
}
