"use client"

export default function Footer({
  onOpenDisclaimer,
  onOpenPrivacy,
  onOpenFunctions,
}: {
  onOpenDisclaimer: () => void
  onOpenPrivacy: () => void
  onOpenFunctions: () => void
}) {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-4 px-6 sm:px-10 text-center text-sm text-gray-600">
      
      {/* Copyright */}
      <p className="mb-3">
        &copy; {new Date().getFullYear()} Enchong Dee University.
      </p>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-4 font-medium">
        <button
          onClick={onOpenFunctions}
          className="hover:text-[#0A326D] transition cursor-pointer"
        >
          Functions
        </button>

        <button
          onClick={onOpenDisclaimer}
          className="hover:text-[#0A326D] transition cursor-pointer"
        >
          Disclaimer
        </button>

        <button
          onClick={onOpenPrivacy}
          className="hover:text-[#0A326D] transition cursor-pointer"
        >
          Privacy Policy
        </button>
      </nav>
    </footer>
  )
}