import { TracingBeam } from "@/components/ui/tracing-beam";
import { ArrowUpRight, ChevronRight } from "lucide-react"
import Image from "next/image";
import { Outfit } from "next/font/google"
import Link from "next/link";
import { workData } from "@/pages/data"
import { WorkExperience } from "@/pages/types"

const outfit = Outfit({
    subsets: ["latin"],
})

export default function WorkExperienceSection() {

    const work: WorkExperience[] = workData
    return (
        <TracingBeam className={`${outfit.className} h-auto bg-dark-black p-10 rounded-xl max-w-5xl`}>
            <div className=" flex flex-col gap-10">
                <header className=" text-4xl font-bold">Worked As,</header>
                {
                    work.map((w, index) => {
                        return (
                            <div key={index} className=" flex gap-6 min-w-96">
                                <div className="pt-1 max-w-16">
                                    <Image alt={w.company} className="aspect-[3/2] object-contain w-44" src={w.logo} />
                                </div>
                                <div className="flex flex-col gap-9 min-w-[90%]">
                                    <div className="flex flex-col">
                                        <div>
                                            <p className="font-medium text-[1.3rem]">{w.post}, {w.company}</p>
                                        </div>
                                        <div>
                                            <Link className="font-medium flex items-center" href={w.link}>
                                                <p className=" text-gray-400 text-[1.2rem]">at, {w.company}.io</p>
                                                <ArrowUpRight className="text-orange-300 w-8" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-12">
                                        {
                                            w.responsabilites.map(resp => {
                                                return (
                                                    <div className="flex p-0"><ChevronRight className="text-orange-300 min-w-8" />
                                                        <p className="">
                                                            {resp}
                                                        </p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </TracingBeam>
    )
}
