"use client"
import { useState, useEffect } from "react"
import { useQRCode } from 'next-qrcode';
import { useBarcode } from "next-barcode";
import Image from "next/image"
import { Geist } from "next/font/google"

const geist = Geist({ subsets: ["latin"] })

function QRComponent({ text }: { text: string }) {
  const { Canvas } = useQRCode()
  return <Canvas text={text} />
}

function BarcodeComponent({ text }: { text: string }) {
  const { inputRef } = useBarcode({
    value: text,
    options: {
      format: "CODE128",
    },
  })

  return <svg ref={inputRef} />
}

function generateBarcode() {
  const part1 = String(Math.floor(Math.random() * 100)).padStart(2, '0');
  const part2 = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
  const part3 = String(Math.floor(Math.random() * 100)).padStart(2, '0');
  return `${part1}-${part2}-${part3}`;
}

export default function Template({ data }: { data: any }) {
    const year = new Date().getFullYear();
    const [imageSrc, setImageSrc] = useState<string>("/empty_profile.jpg");
    const [barcode] = useState<string>(generateBarcode());

    useEffect(() => {
        if (data?.profileImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result as string);
            };
            reader.readAsDataURL(data.profileImage);
        }
    }, [data?.profileImage]);

    return (
        <div className="bg-white flex flex-col rounded-xl">
            <header className="p-5 bg-[#0A326D] text-3xl font-bold text-white text-center tracking-[10px] rounded-t-xl [font-family:var(--font-crimson)]">
                <h1>ENCHONG DEE UNIVERSITY</h1>
            </header>

            <main className="flex flex-row px-8 pt-10 pb-2 justify-between gap-8">
                {/* Left Section */}
                <div className="w-full">

                    {/* Profile Image */}
                    <div className="relative w-80 h-80 overflow-hidden rounded-lg">
                    <Image
                        src={imageSrc}
                        alt="Profile Image"
                        fill
                        className="object-cover"
                    />
                    </div>
                    
                    {/* Role*/}
                    <div className="bg-[#0A326D] text-white text-center pl-8 py-3 rounded-r-md mt-10 -ml-10 w-[calc(100%+2.5rem)]">
                    <h1 className="text-3xl font-bold tracking-[3px]">
                        {data?.applyAs?.toUpperCase() || "STUDENT"}
                    </h1>
                    </div>

                    {/* ID Expiration */}
                    <div className="text-center mt-5">
                        <p className="text-xl mb-2">VALID UNTIL:</p>
                        <h2 className="text-3xl font-black">MAKAUSAD</h2>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full">
                    {/* Role Display & Logo*/}
                    <div className="flex flex-row gap-12 items-center ">
                        <h1 className="text-3xl text-[#0A326D] font-bold">{data?.applyAs?.toUpperCase() || "STUDENT"} <br /> YEARNER</h1>
                        <Image src="/edu.svg" alt="Enchong Dee University Logo" width={120} height={120} />
                    </div>

                    <h2 className="text-2xl font-bold text-[#0A326D] mt-5">{(data?.applyAs?.toUpperCase() || "STUDENT")} ID CARD</h2>
                    {/* ID Informationm */}
                    <div className="flex flex-col gap-7 mt-5 text-[#0A326D]">
                        <h2 className="font-black">NAME: {data?.name?.toUpperCase()}</h2>
                        <h2 className="font-black">GENDER: {data?.gender?.toUpperCase()}</h2>
                        <h2 className="font-black">STATUS: {data?.status?.toUpperCase()}</h2>
                        <h2 className="font-black">
                        {data?.applyAs === "student" ? "COURSE: " : "DEPARTMENT: "}
                        {data?.program?.toUpperCase() || ""}
                        </h2>
                        <h2 className="font-black">ENROLLED SINCE: {year} </h2>
                    </div>

                    {/* QR Code & Barcode */}
                    <div className="flex flex-row gap-7 -ml-3 -mb-4">
                        <div className="w-24 h-24" style={{ transform: 'scale(0.8)', transformOrigin: 'left' }}>
                            <QRComponent text={data?.profileLink || "N/A"} />
                        </div>
                        <div className="flex-1 overflow-hidden" style={{ transform: 'scale(0.8)', transformOrigin: 'left' }}>
                            <BarcodeComponent text={barcode} />
                        </div>
                    </div>
                </div>
            </main>

            <footer className="p-3 bg-[#0A326D] text-center text-white rounded-b-xl [font-family:var(--font-crimson)] text-2xl">
                <p>"Time is the longest distance between two places." - Terrence Williams </p>
            </footer>
        </div>
    )
}