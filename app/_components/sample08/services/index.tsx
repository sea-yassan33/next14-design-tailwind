import Image from 'next/image'

export default function S08_Services(){
  return(
    <section className="bg-[#FDF6F3] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl text-center mb-16">MY SERVICES</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Image
              src="/sample01.svg"
              alt="Interior design service"
              width={500}
              height={400}
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3 className="text-center">内装デザイン及び現場管理</h3>
          </div>
          <div className="space-y-4">
            <Image
              src="/sample01.svg"
              alt="Home coordination service"
              width={500}
              height={400}
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3 className="text-center">家具・小物コーディネート</h3>
          </div>
        </div>
      </div>
    </section>
  )
}