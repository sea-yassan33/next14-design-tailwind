'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FilterTabs() {
  const [activeTab, setActiveTab] = useState('latest')

  return (
    <div className="flex items-center gap-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
        <TabsList className="bg-purple-100 dark:bg-purple-900">
          <TabsTrigger value="latest" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">Latest</TabsTrigger>
          <TabsTrigger value="trending" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">Trending</TabsTrigger>
        </TabsList>
      </Tabs>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="ml-auto bg-white dark:bg-gray-800">
            Filter
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Last 24 hours</DropdownMenuItem>
          <DropdownMenuItem>Last 7 days</DropdownMenuItem>
          <DropdownMenuItem>Last 30 days</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}