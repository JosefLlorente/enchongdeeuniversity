"use client"

export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t border-gray-200 py-4 px-10 text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Enchong Dee University.
        </footer>
    )
}