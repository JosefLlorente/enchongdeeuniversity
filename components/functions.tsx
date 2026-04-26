"use client"

import { X } from "lucide-react"

export default function Functions({
  onClose,
}: {
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative p-6 sm:p-8">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#0A326D]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0A326D] mb-6">
          Functions
        </h1>

        {/* Content */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            This tool lets users generate a fictional meme-inspired university ID.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Fill in your personal details</li>
            <li>Upload a profile image</li>
            <li>Generate a custom ID card preview</li>
            <li>Create QR code and barcode visuals</li>
            <li>Download your ID card as PNG</li>
          </ul>

          <p>
            Submitted data is not stored or reused. Everything is for entertainment only.
          </p>
        </div>

      </div>
    </div>
  )
}