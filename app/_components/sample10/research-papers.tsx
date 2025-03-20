import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Calendar, User, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResearchPapers() {
  const papers = [
    {
      id: 1,
      title: "地中海式食事法と心血管疾患リスクの関連性",
      abstract:
        "この研究では、地中海式食事法を長期間続けることが心血管疾患のリスク低減にどのように影響するかを調査しました。",
      journal: "健康栄養ジャーナル",
      date: "2023年10月",
      authors: "田中健太, 鈴木真理",
      category: "栄養学",
    },
    {
      id: 2,
      title: "日常的な運動が免疫機能に与える影響",
      abstract: "中程度の運動を定期的に行うことが免疫システムの強化にどのように貢献するかを分析した研究です。",
      journal: "スポーツ医学研究",
      date: "2023年8月",
      authors: "佐藤雄一, 高橋直子, 山本健太郎",
      category: "運動生理学",
    },
    {
      id: 3,
      title: "睡眠の質と認知機能の相関関係",
      abstract: "質の高い睡眠が認知機能、特に記憶力と問題解決能力に与える影響について調査した長期研究です。",
      journal: "神経科学ジャーナル",
      date: "2023年9月",
      authors: "伊藤真由美, 中村俊介",
      category: "神経科学",
    },
    {
      id: 4,
      title: "ストレス管理技術の比較効果研究",
      abstract: "瞑想、深呼吸、マインドフルネスなど様々なストレス管理技術の効果を比較した臨床試験の結果です。",
      journal: "心理健康研究",
      date: "2023年7月",
      authors: "小林健一, 渡辺さくら",
      category: "心理学",
    },
    {
      id: 5,
      title: "腸内細菌叢と全身健康の関連性",
      abstract: "腸内細菌の多様性が免疫機能、精神健康、代謝健康にどのように影響するかを調査した最新研究です。",
      journal: "微生物学フロンティア",
      date: "2023年11月",
      authors: "木村太郎, 林美咲, 岡田健太",
      category: "微生物学",
    },
    {
      id: 6,
      title: "高齢者における社会的つながりと寿命の関係",
      abstract: "社会的なつながりと活動が高��者の寿命と生活の質にどのように影響するかを分析した長期観察研究です。",
      journal: "老年医学ジャーナル",
      date: "2023年6月",
      authors: "斎藤和子, 松本健一",
      category: "老年医学",
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {papers.map((paper) => (
          <Card
            key={paper.id}
            className="h-full flex flex-col shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-2 rounded-xl shadow-sm">
                  <FileText className="h-5 w-5 text-amber-600" />
                </div>
                <Badge className="bg-white/80">{paper.category}</Badge>
              </div>
              <CardTitle className="mt-2">{paper.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm mb-4">{paper.abstract}</CardDescription>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{paper.date}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <User className="mr-2 h-4 w-4" />
                  <span>{paper.authors}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="mt-auto pt-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-amber-50 hover:text-amber-800 border-amber-200"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                論文を読む
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

