"use client"

import { X } from "lucide-react"

export default function Disclaimer({
  onClose,
}: {
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl relative p-6 sm:p-8">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#0A326D] transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0A326D] mb-6">
          Disclaimer
        </h1>

        {/* Content */}
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
          <p>
            This is a fictional, meme-inspired project created for entertainment
            and educational purposes only.
          </p>

          <p>
            It is not affiliated with, endorsed by, or connected to Enchong Dee
            or any real institution, company, or organization.
          </p>

          <p>
            This website is independently developed and may contain
            advertisements or monetization features to help support hosting,
            maintenance, and operational costs.
          </p>

          <p>
            Any names, titles, references, or generated content are intended as
            parody, satire, or internet culture humor.
          </p>
        </div>

      </div>
    </div>
  )
}