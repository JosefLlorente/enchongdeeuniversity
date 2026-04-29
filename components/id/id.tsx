"use client"
import { useState, useRef } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import InputField from "@/components/main/input/inputfield"
import Template, { TemplateHandle } from "@/components/main/output/template"
import { Download } from "lucide-react"
import Disclaimer from "@/components/disclaimer"
import Functions from "@/components/functions"
import Policy from "@/components/policy"

export default function ID() {
  const [submittedData, setSubmittedData] = useState(null)
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [showFunction, setShowFunction] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const templateRef = useRef<TemplateHandle>(null)

  const requiredFields = ["name", "gender", "status", "program", "applyAs", "profileLink", "profileImage"] as const
  const isValid = Boolean(submittedData && requiredFields.every((key) => submittedData[key]))

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 w-full lg:container lg:mx-auto py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start px-4 lg:px-0 lg:pb-0">
        <div className="w-full">
          <InputField onSubmit={setSubmittedData} />
        </div>

        <div className="w-full flex justify-center lg:justify-start overflow-visible lg:mb-10">
          <div className="relative origin-top scale-[0.45] sm:scale-[0.6] md:scale-75 lg:scale-100 w-fit">
            {/* Overlay icon button restored */}
            <button
              disabled={!isValid}
              className="absolute m-6 sm:m-5 bg-white p-5 sm:p-3 rounded-lg shadow opacity-40 hover:opacity-100 transition-opacity z-10 pointer-events-auto disabled:cursor-not-allowed"
              onClick={() => templateRef.current?.download()}
            >
              <Download className="w-10 h-10 sm:w-5 sm:h-5" />
            </button>

            <Template ref={templateRef} data={submittedData} />
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
