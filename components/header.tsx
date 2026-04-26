"use client"
import { Geist } from "next/font/google"
import Image from "next/image";

const geist = Geist({ subsets: ["latin"] })

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200 py-5 px-10 flex flex-row items-center">
            <Image src="/edu.svg" alt="Enchong Dee University Logo" width={90} height={90} className="mr-4"/>
            <h1 className={`${geist.className} text-2xl font-bold text-[#0A326D]`}>ENCHONG DEE UNIVERSITY</h1>
        </header>
    )
}