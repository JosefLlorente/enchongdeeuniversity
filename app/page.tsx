"use client"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import InputField from "@/components/main/input/inputfield"
import Template from "@/components/main/output/template"
import { Download } from "lucide-react"
import { toPng } from "html-to-image";

async function downloadAsPNG(elementId: string, filename: string) {
  const element = document.getElementById(elementId);
  if (element) {
    try {
      const dataUrl = await toPng(element, {
        cacheBust: true,
        pixelRatio: 2,
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = filename;
      link.click();
    } catch (err) {
      console.error("Failed to download:", err);
    }
  }
}

export default function Home() {
  const [submittedData, setSubmittedData] = useState(null)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center lg:items-start px-4 lg:px-0">
        {/* Input Section */}
        <div className="w-full">
          <InputField onSubmit={setSubmittedData} />
        </div>
        {/* Output Section */}
        <div className="flex justify-center lg:justify-start w-full -my-45 lg:my-0 pointer-events-none lg:pointer-events-auto">
          <div className="relative scale-45 lg:scale-100 origin-top-center lg:origin-top-left w-fit">
            <button 
              disabled={!submittedData}
              className="absolute m-5 bg-white p-2 rounded shadow opacity-40 hover:opacity-100 transition-opacity z-10 pointer-events-auto"
              onClick={() => downloadAsPNG("id-card", "id-card.png")}
            >
              <Download className="w-5 h-5" />
            </button>
            <div id="id-card">
              <Template data={submittedData} />
            </div>
          </div>
        </div>
      </main>
      <p className="text-red-400 text-center text-xs m-5 px-4 max-w-5xl mx-auto wrap-break-words">
        <strong>DISCLAIMER:</strong> This is a fictional, meme-inspired project created for entertainment and educational purposes only. It is not affiliated with, endorsed by, or connected to Enchong Dee or any real institution or organization. This website is independently developed and may contain advertisements for monetization to support hosting and maintenance costs.
      </p>
      <Footer />
    </div>
  )
}