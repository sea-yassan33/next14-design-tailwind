import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Activity, Brain, Utensils, Pill, Clock } from "lucide-react"

export function HealthTopics() {
  const topics = [
    {
      id: 1,
      title: "心臓の健康を維持する方法",
      description: "日常生活で心臓の健康を維持するための簡単なステップと習慣について解説します。",
      category: "心臓健康",
      readTime: "5分",
      icon: Heart,
    },
    {
      id: 2,
      title: "効果的な有酸素運動のガイド",
      description: "あらゆる年齢と体力レベルに適した有酸素運動の種類とその健康上の利点について。",
      category: "フィットネス",
      readTime: "7分",
      icon: Activity,
    },
    {
      id: 3,
      title: "認知機能を向上させる食品",
      description: "脳の健康をサポートし、認知機能を向上させる可能性のある食品と栄養素について。",
      category: "脳の健康",
      readTime: "6分",
      icon: Brain,
    },
    {
      id: 4,
      title: "バランスの取れた食事計画",
      description: "健康的な食生活のための週間食事計画と簡単なレシピのアイデア。",
      category: "栄養",
      readTime: "8分",
      icon: Utensils,
    },
    {
      id: 5,
      title: "サプリメントの賢い選び方",
      description: "健康補助食品を選ぶ際に考慮すべき重要な要素と一般的な誤解について。",
      category: "サプリメント",
      readTime: "5分",
      icon: Pill,
    },
    {
      id: 6,
      title: "質の高い睡眠のための習慣",
      description: "睡眠の質を向上させ、全体的な健康状態を改善するための科学的に裏付けられた方法。",
      category: "睡眠",
      readTime: "6分",
      icon: Clock,
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Card
            key={topic.id}
            className="h-full flex flex-col shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-3 rounded-xl shadow-sm">
                  <topic.icon className="h-5 w-5 text-amber-600" />
                </div>
                <Badge variant="outline" className="bg-white/80">
                  {topic.category}
                </Badge>
              </div>
              <CardTitle className="mt-4">{topic.title}</CardTitle>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto pt-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                {topic.readTime}の読み物
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

