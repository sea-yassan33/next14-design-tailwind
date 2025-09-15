"use client";
import { useState } from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExerciseModal } from "../_components/sample18/excise-motion";

// サンプル: フロントレイズのモーダル詳細データ
type ExerciseDetail = {
  title: string;
  videoUrl: string;
  mainMuscle: string;
  steps: string[];
};

const exerciseDetails: { [key: string]: ExerciseDetail } = {
  "フロントレイズ": {
    title: "フロントレイズ｜三角筋前部",
    videoUrl: "https://www.youtube.com/embed/55HUwh5Oy8A", // 仮の動画URL
    mainMuscle: "三角筋前部",
    steps: [
      "両手にダンベルを持つ",
      "腕を前方にまっすぐ上げる",
      "肩の高さまで持ち上げてゆっくり下ろす"
    ]
  },
  // 必要に応じて他種目も追加
};

type Exercise = {
  name: string;
  href: string;
};

type MuscleSection = {
  title: string;
  exercises: Exercise[][];
};

type MuscleTab = {
  label: string;
  value: string;
  sections: MuscleSection[];
};

const muscleTabs: MuscleTab[] = [
  {
    label: "肩",
    value: "shoulder",
    sections: [
      {
        title: "三角筋前部",
        exercises: [
          [
            { name: "フロントレイズ", href: "#" },
            { name: "パイクプッシュアップ", href: "#" },
          ],
        ],
      },
      {
        title: "三角筋中部",
        exercises: [
          [
            { name: "ダンベルサイドレイズ", href: "#" },
            { name: "ダンベルショルダープレス", href: "#" },
          ],
          [
            { name: "ダンベルアップライトロウ", href: "#" },
          ],
        ],
      },
      {
        title: "三角筋後部",
        exercises: [
          [
            { name: "リアレイズ", href: "#" },
          ],
        ],
      },
    ],
  },
  {
    label: "背中",
    value: "back",
    sections: [],
  },
  {
    label: "腕",
    value: "arm",
    sections: [],
  },
  {
    label: "胸",
    value: "chest",
    sections: [],
  },
  {
    label: "腹部",
    value: "abs",
    sections: [],
  },
];

export default function Sample18() {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  return (
    <main className="p-8">
      <Tabs defaultValue={muscleTabs[0].value}>
        <TabsList className="flex w-full gap-2 justify-start bg-transparent mb-8">
          {muscleTabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="px-6 py-3 rounded-xl font-semibold 
                text-gray-700 bg-white shadow-md transition
                data-[state=active]:bg-sky-500 data-[state=active]:text-white
                data-[state=active]:shadow-lg data-[state=active]:scale-105
                hover:bg-sky-100 hover:text-sky-700"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {muscleTabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="pt-2">
            {tab.sections.length === 0 ? (
              <div className="text-gray-400">コンテンツ未作成</div>
            ) : (
              tab.sections.map((section) => (
                <div key={section.title} className="mb-8">
                  <div className="font-bold text-lg mb-3">{section.title}</div>
                  <div className="grid grid-cols-2 gap-x-12">
                    {section.exercises.map((col, colIdx) => (
                      <div key={colIdx} className="space-y-3">
                        {col.map((exercise) => (
                          <button
                            key={exercise.name}
                            className="flex items-center bg-transparent p-0 border-0 cursor-pointer"
                            type="button"
                            onClick={() => setSelectedExercise(exercise.name)}
                          >
                            <span className="w-2 h-2 bg-orange-400 inline-block mr-2 rounded" />
                            <span className="text-sky-500 underline decoration-sky-400 decoration-1 underline-offset-2">
                              {exercise.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </TabsContent>
        ))}
      </Tabs>

      {/* モーダル表示 */}
      <ExerciseModal
        exercise={selectedExercise ? exerciseDetails[selectedExercise] : null}
        open={!!selectedExercise}
        onClose={() => setSelectedExercise(null)}
      />
    </main>
  );
}
