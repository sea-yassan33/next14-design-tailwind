import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function S14Sec03() {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        We did reinvent the wheel
      </h1>
      <p className="text-gray-600 text-base mb-2">
        Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
      </p>
      <p className="text-gray-600 text-base mb-8">
        Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 1 */}
        <Link
          href="#"
          className="flex items-center bg-[#f6fafe] rounded-lg px-5 py-4 transition-colors hover:bg-blue-50"
        >
          <span className="flex items-center justify-center h-7 w-7 rounded-full bg-blue-600/10 mr-4">
            <svg width="20" height="20" fill="none" className="text-blue-600">
              <circle cx="10" cy="10" r="10" fill="currentColor" />
              <polygon points="8,6 15,10 8,14" fill="#fff" />
            </svg>
          </span>
          <span className="text-gray-900 font-medium flex-1 text-sm">
            Explore Flowbite and take your marketplace to the next level.
          </span>
          <ArrowRight className="w-5 h-5 text-gray-400 ml-3" />
        </Link>
        {/* 2 */}
        <Link
          href="#"
          className="flex items-center bg-[#f6fafe] rounded-lg px-5 py-4 transition-colors hover:bg-blue-50"
        >
          <span className="flex items-center justify-center h-7 w-7 rounded-full bg-white mr-4 border">
            {/* Figma logo */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#fff" />
              <g>
                <circle cx="12" cy="7" r="2" fill="#F24E1E" />
                <circle cx="12" cy="12" r="2" fill="#A259FF" />
                <circle cx="12" cy="17" r="2" fill="#1ABCFE" />
                <circle cx="15.5" cy="9.5" r="2" fill="#0ACF83" />
                <circle cx="8.5" cy="9.5" r="2" fill="#FF7262" />
              </g>
            </svg>
          </span>
          <span className="text-gray-900 font-medium flex-1 text-sm">
            Get started with our Figma Design System
          </span>
          <ArrowRight className="w-5 h-5 text-gray-400 ml-3" />
        </Link>
        {/* 3 */}
        <Link
          href="#"
          className="flex items-center bg-[#fff7f6] rounded-lg px-5 py-4 transition-colors hover:bg-red-50"
        >
          <span className="flex items-center justify-center h-7 w-7 rounded-full bg-red-600/10 mr-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect width="20" height="20" rx="10" fill="currentColor" className="text-red-600" />
              <path d="M8 12l4-4M8 8l4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-gray-900 font-medium flex-1 text-sm">
            Learn how to market your business on Themesberg.
          </span>
          <ArrowRight className="w-5 h-5 text-gray-400 ml-3" />
        </Link>
        {/* 4 */}
        <Link
          href="#"
          className="flex items-center bg-[#f6fcfa] rounded-lg px-5 py-4 transition-colors hover:bg-teal-50"
        >
          <span className="flex items-center justify-center h-7 w-7 rounded-full bg-teal-600/10 mr-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect width="20" height="20" rx="10" fill="currentColor" className="text-teal-600" />
              <path d="M7 10h6M10 7v6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-gray-900 font-medium flex-1 text-sm">
            Start coding with the most popular utility-first framework
          </span>
          <ArrowRight className="w-5 h-5 text-gray-400 ml-3" />
        </Link>
      </div>
    </div>
  );
}