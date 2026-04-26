"use client"
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-5 px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      
      {/* Logo + Title */}
      <div className="flex items-center">
        <Image
          src="/edu.svg"
          alt="Enchong Dee University Logo"
          width={90}
          height={90}
          className="mr-4"
        />
        <h1 className="text-xl sm:text-2xl font-bold text-[#0A326D]">
          ENCHONG DEE UNIVERSITY
        </h1>
      </div>
    </header>
  );
}