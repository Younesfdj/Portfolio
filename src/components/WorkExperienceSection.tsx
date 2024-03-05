import { TracingBeam } from "@/components/ui/tracing-beam";
import code213 from "../../public/code213-logo.svg"
import djezzy from "../../public/djezzy-logo.svg"
import kbnet from "../../public/kbnet-logo.svg"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import Image from "next/image";
import { Outfit } from "next/font/google"
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
const outfit = Outfit({
    subsets: ["latin"],
})

interface WorkExperience {
    logo: string,
    link: Url,
    post: string,
    company: string,
    responsabilites: string[]
}
export default function WorkExperienceSection() {

    const work: WorkExperience[] = [
        {
            logo: code213,
            link: "https://www.code213.tech",
            post: "Full Stack Web Instructor",
            company: "Code 213",
            responsabilites: ["Teach students the MERN stack, including MongoDB, Express.js, React, and Node.js. Provide guidance and support to students, helping them navigate challenges and grasp concepts effectively.", "Collaborate with colleagues to continuously enhance the curriculum and teaching methodologies."]
        },
        {
            logo: kbnet,
            link: "https://kbnet-dz.com",
            post: "Full Stack Web Developer",
            company: "Kbnet",
            responsabilites: ["Developing and maintaining responsive web applications using React/Next.js, implementing server-side logic and APIs using Express.js to handle data processing and retrieval. Integrating and managing content using Sanity CMS, ensuring a smooth content management workflow", "Staying up-to-date with the latest web development trends, tools, and techniques to continuously improve skills and deliver high-quality solutions."]
        },
        {
            logo: djezzy,
            link: "https://www.djezzy.dz",
            post: "Data Analyst Intern",
            company: "Djezzy",
            responsabilites: ["Studied the concepts and principles of data warehousing, including data storage, extraction, transformation, and loading (ETL) processes, explored the fundamentals of business intelligence and its role in decision-making and data visualization.", "Prepared documentation and reports summarizing key learnings and insights from the internship experience."]
        },


    ]
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
