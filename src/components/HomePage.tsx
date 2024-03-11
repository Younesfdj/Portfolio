import { Spotlight } from "@/components/ui/Spotlight";
import HomeWrapper from "@/components/HomeWrapper";

export default function HomePage() {
    return (
        <HomeWrapper>
            <div className={`h-screen flex items-center justify-center text-white`}>
                <Spotlight />
                <div className="flex items-center p-[1.7rem] pt-2 flex-col text-center h-3/4">
                    <h1 className="text-[5.4rem] font-bold flex flex-col ">
                        Hi, Younes here
                        <br />
                        a web developer.
                    </h1>
                    <div className="text-xl pt-2 flex items-center justify-center flex-col">
                        <p className=" w-2/5">
                            I build scalable and reliable web applications from stable backend and frontend libraries and frameworks that work and generate revenue for you !
                        </p>
                        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-8">
                            Get my resume
                        </button>
                    </div>
                </div>
            </div >
        </HomeWrapper>
    )
}
