'use client' 
import { Star } from 'lucide-react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function BlogPosts() {
  return (
    <div className="grid gap-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <article
          key={i}
          className="group relative rounded-lg border p-4 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
        >
          <div className="flex items-center gap-4">
            <Avatar className="h-8 w-8">
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold hover:underline text-purple-700 dark:text-purple-300">
                a
              </h3>
              <p className="text-sm text-muted-foreground">
                Posted by User{i + 1} • 2 hours ago
              </p>
            </div>
            <Button variant="ghost" size="icon" className="text-yellow-500 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-300">
              <Star className="h-4 w-4" />
              <span className="sr-only">Star</span>
            </Button>
          </div>
          <div className="mt-2 flex gap-2">
            <Button variant="secondary" size="sm" className="bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800">
              Next.js
            </Button>
            <Button variant="secondary" size="sm" className="bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800">
              React
            </Button>
            <Button variant="secondary" size="sm" className="bg-pink-100 text-pink-700 hover:bg-pink-200 dark:bg-pink-900 dark:text-pink-300 dark:hover:bg-pink-800">
              Web Development
            </Button>
          </div>
        </article>
      ))}
    </div>
  )
}