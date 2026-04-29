"use client"
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react"
import { useQRCode } from "next-qrcode"
import { useBarcode } from "next-barcode"
import { domToPng } from "modern-screenshot"

function QRComponent({ text }: { text: string }) {
  const { Canvas } = useQRCode()
  return <Canvas text={text} />
}

function BarcodeComponent({ text }: { text: string }) {
  const { inputRef } = useBarcode({
    value: text,
    options: { format: "CODE128" },
  })
  return <svg ref={inputRef} />
}

function generateBarcode() {
  const p1 = String(Math.floor(Math.random() * 100)).padStart(2, "0")
  const p2 = String(Math.floor(Math.random() * 1000)).padStart(3, "0")
  const p3 = String(Math.floor(Math.random() * 100)).padStart(2, "0")
  return `${p1}-${p2}-${p3}`
}

export interface TemplateHandle {
  download: () => Promise<void>
}

// Separate card content as a reusable component
function CardContent({ data, imageSrc, barcode }: { data: any; imageSrc: string; barcode: string }) {
  const year = new Date().getFullYear()
  return (
    <div className="bg-white flex flex-col rounded-xl shadow-md">
      <header className="p-5 bg-[#0A326D] text-3xl font-bold text-white text-center tracking-[10px] rounded-t-xl">
        <h1>ENCHONG DEE UNIVERSITY</h1>
      </header>

      <main className="flex flex-row px-8 pt-10 pb-2 justify-between gap-8">
        <div className="w-full">
          <div className="relative w-80 h-80 overflow-hidden rounded-lg">
            <img src={imageSrc} alt="Profile" className="object-cover w-full h-full" />
          </div>

          <div className="bg-[#0A326D] text-white text-center pl-8 py-3 rounded-r-md mt-10 -ml-8 w-[calc(100%+2.5rem)]">
            <h1 className="text-3xl font-bold tracking-[3px]">
              {data?.applyAs?.toUpperCase() || "STUDENT"}
            </h1>
          </div>

          <div className="text-center mt-5">
            <p className="text-xl mb-2">VALID UNTIL:</p>
            <h2 className="text-3xl font-black">MAKAUSAD</h2>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-row gap-20 items-center">
            <h1 className="text-3xl text-[#0A326D] font-bold">
              {data?.applyAs?.toUpperCase() || "STUDENT"} <br /> YEARNER
            </h1>
            <img src="/edu.svg" alt="Logo" width="120" height="120" />
          </div>

          <h2 className="text-2xl font-bold text-[#0A326D] mt-5">
            {data?.applyAs?.toUpperCase() || "STUDENT"} ID CARD
          </h2>

          <div className="flex flex-col gap-7 mt-5 text-[#0A326D]">
            <h2 className="font-black">NAME: {data?.name?.toUpperCase()}</h2>
            <h2 className="font-black">GENDER: {data?.gender?.toUpperCase()}</h2>
            <h2 className="font-black">STATUS: {data?.status?.toUpperCase()}</h2>
            <h2 className="font-black">
              {data?.applyAs === "student" ? "COURSE: " : "DEPARTMENT: "}
              {data?.program?.toUpperCase() || ""}
            </h2>
            <h2 className="font-black">ENROLLED SINCE: {year}</h2>
          </div>

          <div className="flex flex-row gap-7 -ml-3 -mb-4">
            <div className="w-24 h-24" style={{ transform: "scale(0.8)", transformOrigin: "left" }}>
              <QRComponent text={data?.profileLink || "N/A"} />
            </div>
            <div className="flex-1 overflow-hidden" style={{ transform: "scale(0.8)", transformOrigin: "left" }}>
              <BarcodeComponent text={barcode} />
            </div>
          </div>
        </div>
      </main>

      <footer className="p-3 bg-[#0A326D] text-center text-white rounded-b-xl text-2xl">
        <p>"Time is the longest distance between two places." - Terrence Williams</p>
      </footer>
    </div>
  )
}

const Template = forwardRef<TemplateHandle, { data: any }>(function Template({ data }, ref) {
  const [imageSrc, setImageSrc] = useState<string>("/empty_profile.jpg")
  const [barcode] = useState<string>(generateBarcode())
  const hiddenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (data?.profileImage) {
      const reader = new FileReader()
      reader.onloadend = () => setImageSrc(reader.result as string)
      reader.readAsDataURL(data.profileImage)
    }
  }, [data?.profileImage])

  useImperativeHandle(ref, () => ({
    download: async () => {
      if (!hiddenRef.current) return
      await new Promise((r) => setTimeout(r, 200))
      try {
        const dataUrl = await domToPng(hiddenRef.current, { scale: 2 })
        const link = document.createElement("a")
        link.download = "id-card.png"
        link.href = dataUrl
        link.click()
      } catch (err) {
        console.error("Download failed:", err)
      }
    },
  }))

  return (
    <>
      {/* Visible scaled preview */}
      <CardContent data={data} imageSrc={imageSrc} barcode={barcode} />

      {/* Hidden full-size copy used only for screenshotting */}
      <div
        ref={hiddenRef}
        style={{
          position: "fixed",
          top: "-9999px",
          left: "-9999px",
          visibility: "hidden",
          pointerEvents: "none",
        }}
      >
        <CardContent data={data} imageSrc={imageSrc} barcode={barcode} />
      </div>
    </>
  )
})

export default Template
