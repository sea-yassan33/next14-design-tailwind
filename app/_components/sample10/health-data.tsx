"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart, Activity, Utensils, Moon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export function HealthData() {
  // 栄養データセット
  const nutritionDatasets = [
    {
      id: "nutrition-1",
      title: "一般的な食品の栄養成分",
      description: "一般的な食品100gあたりの栄養素含有量",
      date: "2023-12-15",
      source: "日本栄養学会",
      data: [
        { food: "ほうれん草", calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2, vitamin: "A, C, K" },
        { food: "鮭", calories: 206, protein: 22.1, carbs: 0, fat: 13.4, fiber: 0, vitamin: "D, B12" },
        { food: "玄米", calories: 111, protein: 2.6, carbs: 23, fat: 0.9, fiber: 1.8, vitamin: "B群" },
        { food: "アボカド", calories: 160, protein: 2, carbs: 8.5, fat: 14.7, fiber: 6.7, vitamin: "E, K" },
        { food: "ブロッコリー", calories: 34, protein: 2.8, carbs: 6.6, fat: 0.4, fiber: 2.6, vitamin: "C, K" },
        { food: "卵", calories: 155, protein: 12.6, carbs: 0.6, fat: 10.6, fiber: 0, vitamin: "D, B12" },
        { food: "レンズ豆", calories: 116, protein: 9, carbs: 20, fat: 0.4, fiber: 7.9, vitamin: "B群, 鉄" },
        { food: "ブルーベリー", calories: 57, protein: 0.7, carbs: 14.5, fat: 0.3, fiber: 2.4, vitamin: "C, K" },
      ],
    },
    {
      id: "nutrition-2",
      title: "スーパーフードの栄養価",
      description: "注目のスーパーフード100gあたりの栄養素含有量",
      date: "2024-01-20",
      source: "健康食品研究所",
      data: [
        {
          food: "チアシード",
          calories: 486,
          protein: 16.5,
          carbs: 42.1,
          fat: 30.7,
          fiber: 34.4,
          vitamin: "カルシウム, 鉄",
        },
        {
          food: "キヌア",
          calories: 368,
          protein: 14.1,
          carbs: 64.2,
          fat: 6.1,
          fiber: 7.0,
          vitamin: "マグネシウム, 鉄",
        },
        { food: "スピルリナ", calories: 290, protein: 57.5, carbs: 23.9, fat: 7.7, fiber: 3.6, vitamin: "B群, 鉄" },
        { food: "マカ", calories: 325, protein: 14.3, carbs: 53.8, fat: 2.2, fiber: 8.5, vitamin: "C, カルシウム" },
        { food: "ゴジベリー", calories: 349, protein: 14.3, carbs: 77.1, fat: 0.4, fiber: 13.0, vitamin: "A, C" },
        {
          food: "カカオニブ",
          calories: 228,
          protein: 14.3,
          carbs: 34.7,
          fat: 35.9,
          fiber: 16.6,
          vitamin: "マグネシウム, 鉄",
        },
      ],
    },
    {
      id: "nutrition-3",
      title: "日本の伝統食品の栄養価",
      description: "日本の伝統的な食品100gあたりの栄養素含有量",
      date: "2024-03-05",
      source: "国立健康栄養研究所",
      data: [
        { food: "納豆", calories: 200, protein: 16.5, carbs: 12.1, fat: 10.0, fiber: 6.7, vitamin: "K2, 鉄" },
        { food: "味噌", calories: 198, protein: 12.1, carbs: 19.2, fat: 6.0, fiber: 5.4, vitamin: "B群, 亜鉛" },
        { food: "豆腐", calories: 76, protein: 8.1, carbs: 1.9, fat: 4.8, fiber: 0.3, vitamin: "カルシウム, 鉄" },
        { food: "わかめ", calories: 45, protein: 3.0, carbs: 9.1, fat: 0.5, fiber: 0.5, vitamin: "ヨウ素, カルシウム" },
        { food: "梅干し", calories: 33, protein: 0.9, carbs: 7.0, fat: 0.1, fiber: 1.8, vitamin: "クエン酸" },
        { food: "玄米茶", calories: 1, protein: 0.2, carbs: 0.3, fat: 0, fiber: 0, vitamin: "カテキン" },
      ],
    },
  ]

  // 運動データセット
  const exerciseDatasets = [
    {
      id: "exercise-1",
      title: "一般的な運動のカロリー消費",
      description: "70kgの成人が各運動を行った場合の平均カロリー消費量",
      date: "2023-11-10",
      source: "スポーツ医学会",
      data: [
        { activity: "ウォーキング（普通）", calories: 280, duration: "60分", intensity: "低" },
        { activity: "ジョギング", calories: 450, duration: "45分", intensity: "中" },
        { activity: "サイクリング", calories: 500, duration: "60分", intensity: "中" },
        { activity: "水泳", calories: 510, duration: "45分", intensity: "高" },
        { activity: "ヨガ", calories: 240, duration: "60分", intensity: "低〜中" },
        { activity: "ウェイトトレーニング", calories: 360, duration: "60分", intensity: "中〜高" },
        { activity: "HIIT", calories: 450, duration: "30分", intensity: "高" },
        { activity: "ピラティス", calories: 210, duration: "45分", intensity: "低〜中" },
      ],
    },
    {
      id: "exercise-2",
      title: "室内運動のカロリー消費",
      description: "65kgの成人が室内で行える運動のカロリー消費量",
      date: "2024-02-15",
      source: "フィットネス研究所",
      data: [
        { activity: "ダンスエクササイズ", calories: 350, duration: "45分", intensity: "中" },
        { activity: "縄跳び", calories: 380, duration: "30分", intensity: "高" },
        { activity: "エアロバイク", calories: 315, duration: "45分", intensity: "中" },
        { activity: "ステッパー", calories: 270, duration: "40分", intensity: "中" },
        { activity: "ボクササイズ", calories: 400, duration: "45分", intensity: "高" },
        { activity: "バーピージャンプ", calories: 320, duration: "20分", intensity: "高" },
      ],
    },
    {
      id: "exercise-3",
      title: "高齢者向け運動のカロリー消費",
      description: "60kgの高齢者が行う低強度運動のカロリー消費量",
      date: "2024-03-10",
      source: "老年医学会",
      data: [
        { activity: "太極拳", calories: 180, duration: "60分", intensity: "低" },
        { activity: "水中ウォーキング", calories: 240, duration: "45分", intensity: "低〜中" },
        { activity: "椅子ヨガ", calories: 150, duration: "45分", intensity: "低" },
        { activity: "軽いガーデニング", calories: 200, duration: "60分", intensity: "低" },
        { activity: "ストレッチ体操", calories: 120, duration: "30分", intensity: "低" },
        { activity: "軽いダンス", calories: 190, duration: "45分", intensity: "低〜中" },
      ],
    },
  ]

  // 睡眠データセット
  const sleepDatasets = [
    {
      id: "sleep-1",
      title: "年齢別推奨睡眠時間",
      description: "米国睡眠財団による年齢別の推奨睡眠時間",
      date: "2023-09-20",
      source: "米国睡眠財団",
      data: [
        { age: "新生児 (0-3ヶ月)", recommended: "14-17時間", acceptable: "11-19時間" },
        { age: "乳児 (4-11ヶ月)", recommended: "12-15時間", acceptable: "10-18時間" },
        { age: "幼児 (1-2歳)", recommended: "11-14時間", acceptable: "9-16時間" },
        { age: "未就学児 (3-5歳)", recommended: "10-13時間", acceptable: "8-14時間" },
        { age: "学童期 (6-13歳)", recommended: "9-11時間", acceptable: "7-12時間" },
        { age: "青年期 (14-17歳)", recommended: "8-10時間", acceptable: "7-11時間" },
        { age: "成人 (18-64歳)", recommended: "7-9時間", acceptable: "6-10時間" },
        { age: "高齢者 (65歳以上)", recommended: "7-8時間", acceptable: "5-9時間" },
      ],
    },
    {
      id: "sleep-2",
      title: "睡眠の質に関する指標",
      description: "睡眠の質を評価するための主要指標",
      date: "2024-01-05",
      source: "国際睡眠医学会",
      data: [
        { age: "睡眠潜時", recommended: "15分以内", acceptable: "30分以内" },
        { age: "睡眠効率", recommended: "85%以上", acceptable: "75%以上" },
        { age: "中途覚醒回数", recommended: "1-2回以下", acceptable: "4回以下" },
        { age: "REM睡眠比率", recommended: "20-25%", acceptable: "15-30%" },
        { age: "深い睡眠比率", recommended: "15-20%", acceptable: "10-25%" },
        { age: "総睡眠時間", recommended: "個人差あり", acceptable: "個人差あり" },
      ],
    },
    {
      id: "sleep-3",
      title: "睡眠障害の有病率",
      description: "主な睡眠障害の年齢層別有病率（%）",
      date: "2024-03-15",
      source: "睡眠障害研究センター",
      data: [
        { age: "不眠症", recommended: "10-15%", acceptable: "成人の30%が経験" },
        { age: "睡眠時無呼吸症候群", recommended: "3-7%", acceptable: "中高年で増加" },
        { age: "むずむず脚症候群", recommended: "5-10%", acceptable: "高齢者で増加" },
        { age: "ナルコレプシー", recommended: "0.02-0.05%", acceptable: "若年発症が多い" },
        { age: "概日リズム睡眠障害", recommended: "7-16%", acceptable: "思春期に多い" },
        { age: "睡眠時遊行症", recommended: "1-5%", acceptable: "小児に多い" },
      ],
    },
  ]

  // 選択されたデータセットのステート
  const [selectedNutritionDataset, setSelectedNutritionDataset] = useState(nutritionDatasets[0].id)
  const [selectedExerciseDataset, setSelectedExerciseDataset] = useState(exerciseDatasets[0].id)
  const [selectedSleepDataset, setSelectedSleepDataset] = useState(sleepDatasets[0].id)

  // 選択されたデータセットを取得する関数
  const getSelectedNutritionDataset = () =>
    nutritionDatasets.find((dataset) => dataset.id === selectedNutritionDataset) || nutritionDatasets[0]
  const getSelectedExerciseDataset = () =>
    exerciseDatasets.find((dataset) => dataset.id === selectedExerciseDataset) || exerciseDatasets[0]
  const getSelectedSleepDataset = () =>
    sleepDatasets.find((dataset) => dataset.id === selectedSleepDataset) || sleepDatasets[0]

  // 日付をフォーマットする関数
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("ja-JP", { year: "numeric", month: "long", day: "numeric" }).format(date)
  }

  return (
    <div>
      <Tabs defaultValue="nutrition" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 bg-white/50">
          <TabsTrigger value="nutrition" className="data-[state=active]:bg-amber-50 data-[state=active]:text-amber-900">
            <Utensils className="mr-2 h-4 w-4" />
            栄養データ
          </TabsTrigger>
          <TabsTrigger value="exercise" className="data-[state=active]:bg-amber-50 data-[state=active]:text-amber-900">
            <Activity className="mr-2 h-4 w-4" />
            運動データ
          </TabsTrigger>
          <TabsTrigger value="sleep" className="data-[state=active]:bg-amber-50 data-[state=active]:text-amber-900">
            <Moon className="mr-2 h-4 w-4" />
            睡眠データ
          </TabsTrigger>
        </TabsList>

        {/* 栄養データタブ */}
        <TabsContent value="nutrition">
          <div className="mb-4">
            <Select value={selectedNutritionDataset} onValueChange={setSelectedNutritionDataset}>
              <SelectTrigger className="w-full md:w-[350px] bg-white">
                <SelectValue placeholder="データセットを選択" />
              </SelectTrigger>
              <SelectContent>
                {nutritionDatasets.map((dataset) => (
                  <SelectItem key={dataset.id} value={dataset.id} className="flex items-center">
                    <div>
                      {dataset.title}
                      <span className="ml-2 text-xs text-muted-foreground">{formatDate(dataset.date)}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Card className="shadow-md bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-transparent rounded-t-lg">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center">
                    <BarChart className="mr-2 h-5 w-5 text-amber-600" />
                    {getSelectedNutritionDataset().title}
                  </CardTitle>
                  <CardDescription>{getSelectedNutritionDataset().description}</CardDescription>
                </div>
                <div className="flex flex-col items-end">
                  <Badge variant="outline" className="mb-1 bg-white/80">
                    {formatDate(getSelectedNutritionDataset().date)}
                  </Badge>
                  <span className="text-xs text-muted-foreground">出典: {getSelectedNutritionDataset().source}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader className="bg-amber-50/50">
                    <TableRow>
                      <TableHead>食品</TableHead>
                      <TableHead className="text-right">カロリー(kcal)</TableHead>
                      <TableHead className="text-right">タンパク質(g)</TableHead>
                      <TableHead className="text-right">炭水化物(g)</TableHead>
                      <TableHead className="text-right">脂質(g)</TableHead>
                      <TableHead className="text-right">食物繊維(g)</TableHead>
                      <TableHead>主要ビタミン・ミネラル</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getSelectedNutritionDataset().data.map((item, index) => (
                      <TableRow key={index} className="hover:bg-amber-50/30">
                        <TableCell className="font-medium">{item.food}</TableCell>
                        <TableCell className="text-right">{item.calories}</TableCell>
                        <TableCell className="text-right">{item.protein}</TableCell>
                        <TableCell className="text-right">{item.carbs}</TableCell>
                        <TableCell className="text-right">{item.fat}</TableCell>
                        <TableCell className="text-right">{item.fiber}</TableCell>
                        <TableCell>{item.vitamin}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 運動データタブ */}
        <TabsContent value="exercise">
          <div className="mb-4">
            <Select value={selectedExerciseDataset} onValueChange={setSelectedExerciseDataset}>
              <SelectTrigger className="w-full md:w-[350px] bg-white">
                <SelectValue placeholder="データセットを選択" />
              </SelectTrigger>
              <SelectContent>
                {exerciseDatasets.map((dataset) => (
                  <SelectItem key={dataset.id} value={dataset.id}>
                    {dataset.title}
                    <span className="ml-2 text-xs text-muted-foreground">{formatDate(dataset.date)}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Card className="shadow-md bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-transparent rounded-t-lg">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center">
                    <LineChart className="mr-2 h-5 w-5 text-amber-600" />
                    {getSelectedExerciseDataset().title}
                  </CardTitle>
                  <CardDescription>{getSelectedExerciseDataset().description}</CardDescription>
                </div>
                <div className="flex flex-col items-end">
                  <Badge variant="outline" className="mb-1 bg-white/80">
                    {formatDate(getSelectedExerciseDataset().date)}
                  </Badge>
                  <span className="text-xs text-muted-foreground">出典: {getSelectedExerciseDataset().source}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader className="bg-amber-50/50">
                    <TableRow>
                      <TableHead>運動種類</TableHead>
                      <TableHead className="text-right">消費カロリー(kcal)</TableHead>
                      <TableHead>所要時間</TableHead>
                      <TableHead>強度</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getSelectedExerciseDataset().data.map((item, index) => (
                      <TableRow key={index} className="hover:bg-amber-50/30">
                        <TableCell className="font-medium">{item.activity}</TableCell>
                        <TableCell className="text-right">{item.calories}</TableCell>
                        <TableCell>{item.duration}</TableCell>
                        <TableCell>{item.intensity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 睡眠データタブ */}
        <TabsContent value="sleep">
          <div className="mb-4">
            <Select value={selectedSleepDataset} onValueChange={setSelectedSleepDataset}>
              <SelectTrigger className="w-full md:w-[350px] bg-white">
                <SelectValue placeholder="データセットを選択" />
              </SelectTrigger>
              <SelectContent>
                {sleepDatasets.map((dataset) => (
                  <SelectItem key={dataset.id} value={dataset.id}>
                    {dataset.title}
                    <span className="ml-2 text-xs text-muted-foreground">{formatDate(dataset.date)}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Card className="shadow-md bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-transparent rounded-t-lg">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center">
                    <PieChart className="mr-2 h-5 w-5 text-amber-600" />
                    {getSelectedSleepDataset().title}
                  </CardTitle>
                  <CardDescription>{getSelectedSleepDataset().description}</CardDescription>
                </div>
                <div className="flex flex-col items-end">
                  <Badge variant="outline" className="mb-1 bg-white/80">
                    {formatDate(getSelectedSleepDataset().date)}
                  </Badge>
                  <span className="text-xs text-muted-foreground">出典: {getSelectedSleepDataset().source}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader className="bg-amber-50/50">
                    <TableRow>
                      <TableHead>項目</TableHead>
                      <TableHead>推奨値</TableHead>
                      <TableHead>許容範囲</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getSelectedSleepDataset().data.map((item, index) => (
                      <TableRow key={index} className="hover:bg-amber-50/30">
                        <TableCell className="font-medium">{item.age}</TableCell>
                        <TableCell>{item.recommended}</TableCell>
                        <TableCell>{item.acceptable}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// デフォルトエクスポートを追加
export default HealthData
