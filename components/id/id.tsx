"use client"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import InputField from "@/components/main/input/inputfield"
import Template from "@/components/main/output/template"
import Disclaimer from "@/components/disclaimer"
import Functions from "@/components/functions"
import Policy from "@/components/policy"

export default function ID() {
  const [submittedData, setSubmittedData] = useState(null)
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [showFunction, setShowFunction] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 w-full lg:container lg:mx-auto py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start px-4 lg:px-0 lg:pb-0">
        {/* Input Section */}
        <div className="w-full">
          <InputField onSubmit={setSubmittedData} />
        </div>

        {/* Output Section */}
        <div className="w-full flex justify-center lg:justify-start overflow-visible lg:mb-10">
          <div className="relative origin-top scale-[0.45] sm:scale-[0.6] md:scale-75 lg:scale-100 w-fit">
            <Template data={submittedData} />
          </div>
        </div>
      </main>

      <Footer
        onOpenDisclaimer={() => setShowDisclaimer(true)}
        onOpenFunctions={() => setShowFunction(true)}
        onOpenPrivacy={() => setShowPrivacy(true)}
      />
      {showDisclaimer && <Disclaimer onClose={() => setShowDisclaimer(false)} />}
      {showFunction && <Functions onClose={() => setShowFunction(false)} />}
      {showPrivacy && <Policy onClose={() => setShowPrivacy(false)} />}
    </div>
  )
}
