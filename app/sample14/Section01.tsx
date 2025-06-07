import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Info } from "lucide-react";
import Link from "next/link";

export default function S14Sec01(){
  return(
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
      {/* 左側セッション */}
      <div className="flex-1 min-w-0">
        {/* Platform Selection */}
        <div className="flex items-center gap-3 mb-6">
          <Badge className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 text-base font-medium">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15.83 10.67c0-2.35 1.96-3.5 2.05-3.56-1.13-1.67-2.89-1.9-3.5-1.93-1.5-.15-2.93.89-3.69.89-.76 0-1.95-.87-3.21-.85-1.64.02-3.17.96-4.01 2.42-1.7 2.94-.44 7.28 1.22 9.67.82 1.17 1.79 2.48 3.07 2.43 1.22-.05 1.68-.79 3.16-.79 1.48 0 1.88.79 3.16.77 1.3-.02 2.11-1.18 2.91-2.35.62-.89.87-1.36 1.36-2.39-3.57-1.36-4.12-6.41-.6-7.31zM13.53 3.46c.66-.8 1.13-1.91.99-3.02-1.04.04-2.31.7-3.06 1.54-.67.75-1.24 1.88-1.02 2.99 1.17.09 2.39-.6 3.09-1.51z" fill="#fff"/>
            </svg>
            iOS
          </Badge>
          <Badge variant="secondary" className="bg-gray-50 text-gray-500 px-4 py-2 rounded-lg flex items-center gap-2 text-base font-medium">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="2" width="16" height="16" rx="4" fill="#E5E7EB"/>
              <path d="M7 6h6v8H7z" fill="#9CA3AF"/>
              <circle cx="10" cy="10" r="2" fill="#9CA3AF"/>
            </svg>
            Android
          </Badge>
        </div>
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Flowbite in iOS: Take control of your finances with us
        </h1>
        {/* Description */}
        <p className="text-lg text-gray-600 mb-8">
          Our app helps users easily track their expenses and create a budget. With a user-friendly interface, the app allows users to quickly input their income and expenses, and then automatically categorizes them for easy tracking.
        </p>
        <hr className="border-gray-200 mb-6" />
        {/* Feature List */}
        <ul className="space-y-3 mb-7">
          {[
            "Continuous integration and deployment",
            "Development workflow",
            "Knowledge management",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="text-indigo-500 w-5 h-5 mt-0.5" />
              <span className="font-semibold text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
        {/* Subtext */}
        <p className="text-gray-600 mb-7">
          Flow Budget takes the hassle out of budgeting and empowers users to take control of their finances
        </p>
        {/* CTA */}
        <Link href="#" className="inline-flex items-center text-indigo-600 font-medium hover:underline gap-1">
          Check out the iOS app features
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
      {/* 右側セッション */}
      <div className="flex-1 flex justify-center">
        <div className="flex-1 flex justify-center">
          {/* Phone mockup */}
          <div className="relative w-[340px] h-[600px] bg-white rounded-[40px] border-8 border-blue-800 flex flex-col items-center pt-5 pb-4 shadow-xl">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-gray-900 rounded-b-3xl z-10" />
            <div className="flex-1 flex flex-col items-center justify-start mt-10">
              {/* Chart & Map Image */}
              <div className="mt-3 mb-4 flex flex-col items-center">
                <Image
                  src="/sample02.png"
                  alt="App screen"
                  width={250}
                  height={420}
                  className="rounded-[24px] object-contain"
                  priority
                />
              </div>
            </div>
            {/* Bottom navigation (dummy) */}
            <div className="flex justify-between items-center w-full px-10 mt-auto pt-4">
              <svg width="28" height="28" fill="none" stroke="#D1D5DB" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
              <svg width="28" height="28" fill="none" stroke="#D1D5DB" strokeWidth={2} viewBox="0 0 24 24"><rect x="6" y="10" width="12" height="4" rx="2"/></svg>
              <svg width="28" height="28" fill="none" stroke="#D1D5DB" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}