"use client"

import { X } from "lucide-react"

export default function Policy({
  onClose,
}: {
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative p-6 sm:p-8">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#0A326D] transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0A326D] mb-6">
          Privacy Policy
        </h1>

        {/* Content */}
        <div className="space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed">

          <section>
            <h2 className="font-semibold text-[#0A326D] mb-1">
              1. Introduction
            </h2>
            <p>
              This website is a fictional, entertainment-based project. Your
              privacy is respected, and this page explains how information is
              handled while using this tool.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#0A326D] mb-1">
              2. Data Collection
            </h2>
            <p>
              We do not require account registration or personal identification
              to use this tool.
            </p>
            <p>
              Information entered into the form (such as name, status, program,
              links, or uploaded images) is processed locally in your browser for
              preview generation only.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#0A326D] mb-1">
              3. Data Storage
            </h2>
            <p>
              We do not permanently store submitted form data on our servers.
              Inputs are used temporarily for generating your visual output.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#0A326D] mb-1">
              4. Cookies & Advertising
            </h2>
            <p>
              This website may display advertisements through third-party
              providers such as Google AdSense. These providers may use cookies
              or similar technologies to serve relevant ads.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#0A326D] mb-1">
              5. Third-Party Links
            </h2>
            <p>
              User-entered links or external websites accessed through this tool
              are outside our control. Please review their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#0A326D] mb-1">
              6. Children’s Privacy
            </h2>
            <p>
              This website is not intended to knowingly collect personal data
              from children.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#0A326D] mb-1">
              7. Changes to This Policy
            </h2>
            <p>
              This Privacy Policy may be updated periodically to reflect changes
              in the website or applicable requirements.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}