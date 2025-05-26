import Link from 'next/link';
import Image from 'next/image';
export default function Section05(){
  // サンプルデータ
  const newsData = [
    {
      id: 1,
      date: '2025.05.21',
      title: '【お知らせ】訪問介護のサイトをリニューアルしました',
      description:
        '利用者様やご家族の皆様に、より分かりやすく、使いやすいサイトを目指して、訪問介護のサイトをリニューアルしました。新しいデザインと機能をぜひご覧ください。',
      imageUrl: '/sample01.svg',
      link: '/news/1',
    },
    {
      id: 2,
      date: '2025.05.20',
      title: '【お知らせ】看護師・リハビリ職を募集中',
      description:
        '当社では、訪問看護やリハビリテーションを提供するための看護師・リハビリ職を募集中です。詳細は採用情報ページをご覧ください。',
      imageUrl: '/sample01.svg',
      link: '/news/2',
    },
  ];
  return(
    <div className="w-full py-10 lg:py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left underline decoration-teal-300">
                お知らせ
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* お知らせリスト */}
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6 ">
        {newsData.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
            {/* サムネイル画像 */}
            <div className="flex-shrink-0">
              <Image src={item.imageUrl} alt={item.title} width={100} height={100} className="w-full h-48 md:w-48 md:h-32 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"/>
            </div>
            {/* テキスト部分 */}
            <div className="mt-4 md:mt-0 md:ml-4 flex flex-col justify-between">
              <time className="text-gray-500 text-sm">{item.date}</time>
              <h3 className="mt-1 text-lg font-semibold text-blue-600 hover:underline">
                <Link href={item.link}>{item.title}</Link>
              </h3>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}