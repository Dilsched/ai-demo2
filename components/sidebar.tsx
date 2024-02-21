"use client";
import Link from "next/link";
import Image from "next/image";
import { Code, ImageIcon, Layout, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { Montserrat } from "next/font/google";


import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const montserrat =Montserrat ({
    weight: "600", subsets: ["latin"]
});


const routes =[
    {
        label:"Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        colour:"text-sky-500"
    },

    {
        label:"Conversation",
        icon: MessageSquare,
        href: "/conversation",
        colour:"text-green-500"
    },

    {
        label:"Image Generation",
        icon: ImageIcon,
        href: "/image",
        colour:"text-pink-700"
    },

    {
        label:"Video Generation",
        icon: VideoIcon,
        href: "/video",
        colour:"text-orange-800"
    },

    {
        label:"Music Generation",
        icon: Music,
        href: "/music",
        colour:"text-emerald-500"
    },

    {
        label:"Code Generation",
        icon: Code,
        href: "/code",
        colour:"text-violet-500"
    },

    {
        label:"Settings",
        icon: Settings,
        href: "/settings",
    },
];


const Sidebar = () => {
    const pathname =usePathname();
    return (
        <div className="space-y-4 flex flex-col h-full
        bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex
                ites-ceter pl-3 mb-14">
                <div className="relative w-8 h-8 mr-4 ">
                    <Image
                    fill
                    alt="Logo"
                    src="/logo.png" 
                    />
                </div>
                <h1 className={cn ("font-bold" ,
                montserrat.className
                )}>
                    Generative tool
                </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) =>(
                      <Link
                      href={route.href}
                      key={route.href}
                      className="text-sm group flex p-3 w-full
                      justify-start font-medium cursor-pointer
                      hover:text-white hover:bg-white/10 rounded-lg
                      transition"
                      >
                        <div className="flex items-center flex-1">
                           <route.icon className={cn("h-5 w-5 mr-3" , route.colour)} />
                           {route.label}
                        </div>
                      </Link>  
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Sidebar;