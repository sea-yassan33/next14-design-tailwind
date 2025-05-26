

export default function Section04(){
  return(
    <div className="grid grid-cols-2 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-gray-300 bg-orange-50 pt-5">
      {/* Item 1 */}
      <div className="py-8 md:py-0 md:px-8 text-center">
        <h3 className="text-xl font-bold text-orange-500">365日24時間</h3>
        <p className="mt-1 text-gray-800">の連絡体制</p>
        <div className="my-4 flex justify-center">
          {/* 24h icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500" fill="none" viewBox="0 0 48 48" stroke="currentColor">
            <circle cx="24" cy="24" r="20" strokeWidth="2" className="opacity-30" />
            <path d="M24 12v12l8 4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-gray-600">夜間、休日等の緊急対応を行っています。</p>
      </div>
      {/* Item 2 */}
      <div className="py-8 md:py-0 md:px-8 text-center">
        <h3 className="text-xl font-bold text-orange-500">リハビリ・看護・ケア</h3>
        <p className="mt-1 text-gray-800">マネージャーとの連携体制</p>
        <div className="my-4 flex justify-center">
          {/* Handshake icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 12l6-6 8 8-6 6-8-8z" fillOpacity=".1" />
            <path d="M8 2l4 4-6 6-4-4 6-6z" />
          </svg>
        </div>
        <p className="text-gray-600">質の高いリハビリサービスと看護サービスで充実した支援環境を整えています。</p>
      </div>
      {/* Item 3 */}
      <div className="py-8 md:py-0 md:px-8 text-center">
        <h3 className="text-xl font-bold text-orange-500">看護スタッフ、リハビリスタッフが在籍</h3>
        <div className="my-4 flex justify-center">
          {/* Hands & heart icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" fillOpacity=".1" />
            <path d="M12 19s-4.5-3.3-4.5-8a4.5 4.5 0 119 0c0 4.7-4.5 8-4.5 8z" />
          </svg>
        </div>
        <p className="text-gray-600">看護師、介護福祉士、作業療法士、理学療法士、言語聴覚士、管理栄養士が在籍しています。</p>
      </div>
    </div>
  )
}