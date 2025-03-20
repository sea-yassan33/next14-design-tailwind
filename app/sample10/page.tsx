import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HealthTopics } from "@/app/_components/sample10/health-topics"
import { ResearchPapers } from "@/app/_components/sample10//research-papers"
import { HealthData } from "@/app/_components/sample10/health-data"

export default function HealthInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcf1e3] via-[#fcf6eb] to-[#fff8f0]">
      <div className="container mx-auto py-12 px-4">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-3 bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
            健康情報センター
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            最新の健康トピック、研究論文、データを探索しましょう
          </p>
        </header>

        <div className="max-w-7xl mx-auto backdrop-blur-sm bg-white/70 rounded-2xl shadow-xl p-6 md:p-8">
          <Tabs defaultValue="topics" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50">
              <TabsTrigger value="topics">健康トピック一覧</TabsTrigger>
              <TabsTrigger value="papers">論文概要一覧</TabsTrigger>
              <TabsTrigger value="data">データ一覧</TabsTrigger>
            </TabsList>
            <TabsContent value="topics">
              <HealthTopics />
            </TabsContent>
            <TabsContent value="papers">
              <ResearchPapers />
            </TabsContent>
            <TabsContent value="data">
              <HealthData />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
