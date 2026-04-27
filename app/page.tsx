"use client"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Download } from "lucide-react"
import Disclaimer from "@/components/disclaimer"
import Functions from "@/components/functions"
import Policy from "@/components/policy"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function Home() {
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [showFunction, setShowFunction] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const router = useRouter()
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header/>

      <main className="flex-1 container mx-auto px-4 py-12 gap-50">
        {/* History */}
        <section className="mb-30">
          <h1 className="text-3xl font-bold mb-8 text-[#0A326D] text-center">History</h1>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <p className="flex-1 text-lg leading-relaxed text-center lg:text-left">Established sometime between destiny and pure delusion, Enchong Dee University was founded by Enchong Dee, famously known as <strong>The Man Who Can't Be Moved</strong>. Inspired by his unwavering ability to remain standing while life happened around him, he envisioned an institution where young yearners, certified torpes, survivors of no labels, loyal delulus, and emotionally resilient citizens could gather in pursuit of closure, mixed signals, and something vaguely important.</p>
            <div className="w-80 h-80 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/deemakausad.jpeg" alt="Dee Makausad" width={300} height={300} className="object-cover w-full h-full"/>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-30">
          <h1 className="text-3xl font-bold mb-8 text-[#0A326D] text-center">Mission, Vision & Core Values</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-[#0A326D]">Mission</h2>
              <p className="text-sm leading-relaxed">Enchong Dee University exists to nurture emotionally complex individuals by providing a safe space for unresolved feelings, mixed signals interpretation, overthinking excellence, and romantic situationships that never reach conclusion. We aim to guide students in mastering the art of waiting, wondering, and "what if"-ing, while still functioning in society (barely).</p>
            </Card>

            <Card className="p-6 flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-[#0A326D]">Vision</h2>
              <p className="text-sm leading-relaxed">To become the leading global institution for yearners, torpes, delulus, and certified no-label survivors, where every individual learns to embrace feelings they pretend not to have, and where moving on is treated as an optional elective.</p>
            </Card>

            <Card className="p-6 flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-[#0A326D]">Core Values</h2>
              <p className="text-sm leading-relaxed">Enchong Dee University upholds No Label Integrity by respecting all connections that refuse to define themselves but still demand emotional effort, Certified Torpe Energy through silence, stares, and unread messages that say everything but nothing, Delulu Excellence by treating imagination as a valid coping mechanism and sometimes a lifestyle, Emotional Endurance by surviving mixed signals, delayed replies, and seen-zone experiences, Yearner Persistence by honoring those who stay, wait, and overthink professionally and passionately, and Closure Optional Policy by recognizing that not all stories end—and that's okay (or not okay, but we move).</p>
            </Card>
          </div>
        </section>

        {/* Contributors & Sponsors */}
        <section className="mb-30">
          <h1 className="text-3xl font-bold mb-8 text-[#0A326D] text-center">Our Contributors and Sponsors</h1>
          <div className="flex justify-center gap-10 flex-wrap">
            <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/imu.jpg" alt="Imu" width={150} height={150} className="object-cover w-full h-full"/>
            </div>
            <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/meliodas.jpeg" alt="Meliodas" width={150} height={150} className="object-cover w-full h-full"/>
            </div>
            <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/nero.jpg" alt="Nero" width={150} height={150} className="object-cover w-full h-full"/>
            </div>
            <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/obito.png" alt="Obito" width={150} height={150} className="object-cover w-full h-full"/>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="flex justify-center">
          <Card className="p-8 max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#0A326D]">Create your own ID</h2>
            <p className="text-sm leading-relaxed mb-6">Join the ranks of the emotionally resilient and romantically confused by creating your own Enchong Dee University ID. Whether you're a yearner, a torpe, a delulu, or just someone who appreciates the art of overthinking, our ID generator is here to help you embrace your feelings in style. Click the button below to get started and show off your unique emotional complexity with pride!</p>
            <button 
              className="mt-4 px-6 py-3 bg-[#0A326D] text-white rounded-md flex items-center justify-center gap-2 hover:bg-[#0A326D]/90 transition-colors mx-auto cursor-pointer" 
              onClick={() => router.push("/id")}
            >
              ID Generator
              <Download className="w-5 h-5" />
            </button>
          </Card>
        </section>
      </main>

      <Footer  
        onOpenDisclaimer={() => setShowDisclaimer(true)}
        onOpenFunctions={() => setShowFunction(true)}
        onOpenPrivacy={() => setShowPrivacy(true)}
      />
      {showDisclaimer && (
        <Disclaimer onClose={() => setShowDisclaimer(false)} />
      )}

      {showFunction && (
        <Functions onClose={() => setShowFunction(false)} />
      )}

      {showPrivacy && (
        <Policy onClose={() => setShowPrivacy(false)} />
      )}
    </div>
  )
}