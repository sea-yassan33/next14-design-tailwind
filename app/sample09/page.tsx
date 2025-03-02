"use client";
import { useState } from "react"
import { Calendar, Clock, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Sample09() {
  // 種目のリストを管理する
  const [exercises, setExercises] = useState([{ id: 1, name: "", sets: Array(5).fill({ weight: "", reps: "" }) }])
  // 種目の選択肢
  const exerciseOptions = [
    { value: "squat", label: "スクワット" },
    { value: "leg-press", label: "レッグプレス" },
    { value: "leg-curl", label: "レッグカール" },
    { value: "leg-extension", label: "レッグエクステンション" },
    { value: "deadlift", label: "デッドリフト" },
    { value: "bench-press", label: "ベンチプレス" },
    { value: "shoulder-press", label: "ショルダープレス" },
    { value: "lat-pulldown", label: "ラットプルダウン" },
    { value: "bicep-curl", label: "バイセップカール" },
    { value: "tricep-extension", label: "トライセップエクステンション" },
    { value: "calf-raise", label: "カーフレイズ" },
    { value: "abdominal-crunch", label: "アブドミナルクランチ" },
  ]
  // 部位の選択
  const bodyPartOptions = [
    { value: "lower-body", label: "下半身" },
    { value: "upper-body", label: "上半身" },
    { value: "core", label: "体幹" },
    { value: "full-body", label: "全身" },
    { value: "arms", label: "腕" },
    { value: "back", label: "背中" },
    { value: "chest", label: "胸" },
    { value: "shoulders", label: "肩" },
  ]
  // 種目の名前を更新する
  const handleExerciseChange = (index: number, field: string, value: string) => {
    // exercisesのindex番目の要素を更新する
    const updatedExercises = [...exercises]
    // exercises[index]のfieldの値をvalueに更新する
    updatedExercises[index] = { ...updatedExercises[index], [field]: value }
    setExercises(updatedExercises)
  }
  // 1set, 2set, 3set, 4set, 5setのそれぞれのweightとrepsの値を更新する
  const handleSetChange = (exerciseIndex: number, setIndex: number, field: string, value: string) => {
    const updatedExercises = [...exercises]
    const updatedSets = [...updatedExercises[exerciseIndex].sets]
    updatedSets[setIndex] = { ...updatedSets[setIndex], [field]: value }
    updatedExercises[exerciseIndex].sets = updatedSets
    setExercises(updatedExercises)
  }
  // 種目を追加する
  const addExercise = () => {
    setExercises([...exercises, { id: exercises.length + 1, name: "", sets: Array(5).fill({ weight: "", reps: "" }) }])
  }
  // 種目を削除する
  const removeExercise = (index: number) => {
    if (exercises.length > 1) {
      const updatedExercises = exercises.filter((_, i) => i !== index)
      setExercises(updatedExercises)
    }
  }
  // ページの表示
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold text-center text-pink-700">トレーニングメニュー</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-pink-500" />
                <Label htmlFor="date" className="text-pink-700">
                  日付
                </Label>
              </div>
              <Input id="date" type="date" className="border-pink-200 focus:border-pink-400" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-pink-500" />
                <Label htmlFor="time" className="text-pink-700">
                  時間
                </Label>
              </div>
              <Input id="time" type="time" className="border-pink-200 focus:border-pink-400" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-pink-500" />
                <Label htmlFor="location" className="text-pink-700">
                  場所
                </Label>
              </div>
              <Input id="location" placeholder="トレーニング場所" className="border-pink-200 focus:border-pink-400" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-pink-500" />
                <Label className="text-pink-700">コンディション</Label>
              </div>
              <RadioGroup defaultValue="good" className="flex space-x-4">
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="good" id="good" className="text-pink-500" />
                  <Label htmlFor="good" className="text-sm">
                    良好
                  </Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="normal" id="normal" className="text-pink-500" />
                  <Label htmlFor="normal" className="text-sm">
                    普通
                  </Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="bad" id="bad" className="text-pink-500" />
                  <Label htmlFor="bad" className="text-sm">
                    不調
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <Label htmlFor="body-part" className="text-pink-700">
                部位
              </Label>
              <Select>
                <SelectTrigger id="body-part" className="w-[180px] border-pink-200 focus:border-pink-400">
                  <SelectValue placeholder="部位を選択" />
                </SelectTrigger>
                <SelectContent>
                  {bodyPartOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-pink-100 text-pink-700">
                  <th className="border border-pink-200 p-2 w-1/6">種目</th>
                  <th className="border border-pink-200 p-2 w-1/6">1set</th>
                  <th className="border border-pink-200 p-2 w-1/6">2set</th>
                  <th className="border border-pink-200 p-2 w-1/6">3set</th>
                  <th className="border border-pink-200 p-2 w-1/6">4set</th>
                  <th className="border border-pink-200 p-2 w-1/6">5set</th>
                  <th className="border border-pink-200 p-2 w-12"></th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((exercise, exerciseIndex) => (
                  <tr key={exercise.id} className="hover:bg-pink-50">
                    <td className="border border-pink-200 p-2">
                      <Select
                        value={exercise.name}
                        onValueChange={(value) => handleExerciseChange(exerciseIndex, "name", value)}
                      >
                        <SelectTrigger className="border-pink-200 focus:border-pink-400">
                          <SelectValue placeholder="種目を選択" />
                        </SelectTrigger>
                        <SelectContent>
                          {exerciseOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>
                    {exercise.sets.map((set, setIndex) => (
                      <td key={setIndex} className="border border-pink-200 p-2">
                        <div className="flex items-center space-x-1">
                          <Input
                            type="number"
                            placeholder="kg"
                            value={set.weight}
                            onChange={(e) => handleSetChange(exerciseIndex, setIndex, "weight", e.target.value)}
                            className="w-14 h-8 text-sm border-pink-200 focus:border-pink-400"
                          />
                          <span className="text-pink-700">×</span>
                          <Input
                            type="number"
                            placeholder="回"
                            value={set.reps}
                            onChange={(e) => handleSetChange(exerciseIndex, setIndex, "reps", e.target.value)}
                            className="w-14 h-8 text-sm border-pink-200 focus:border-pink-400"
                          />
                        </div>
                      </td>
                    ))}
                    <td className="border border-pink-200 p-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeExercise(exerciseIndex)}
                        className="h-8 w-8 p-0 text-pink-700 hover:text-pink-900 hover:bg-pink-100"
                      >
                        ×
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between">
            <Button type="button" onClick={addExercise} className="bg-pink-500 hover:bg-pink-600 text-white">
              種目を追加
            </Button>
            <Button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white">
              保存する
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}