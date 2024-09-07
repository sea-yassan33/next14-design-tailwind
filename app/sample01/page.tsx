import Image from "next/image"

const twStyles = {
  body: 'text-gray-600 body-font',
  container: 'container px-5 py-24 mx-auto',
  base01:'flex flex-wrap -m-4',
  item:'lg:w-1/4 md:w-1/2 p-4 w-full',
  itemImg01:'block relative h-48 rounded overflow-hidden',
  itemImg02:'object-cover object-center w-full h-full block',
  itemTextH2:'text-gray-900 title-font text-lg font-medium',
  itemTextH3:'text-gray-500 text-xs tracking-widest title-font mb-1',
}

export default function Sample01(){
  return(
    <section className={`${twStyles.body}`}>
      <div className={`${twStyles.container}`}>
        <div className={`${twStyles.base01}`}>
          <div className={`${twStyles.item}`}>
            <div className={`${twStyles.itemImg01}`}>
              <Image alt="sample_img" className={`${twStyles.itemImg02}`} src="https://dummyimage.com/420x260" width={420} height={260}></Image>
            </div>
            <div className="mt-1">
              <h2 className={`${twStyles.itemTextH2}`}>Sample01</h2>
              <h3 className={`${twStyles.itemTextH3}`}>sub title</h3>
              <p className="mt-1">サンプルテキスト</p>
            </div>
          </div>
          <div className={`${twStyles.item}`}>
            <div className={`${twStyles.itemImg01}`}>
              <iframe  className={`${twStyles.itemImg02}`} width="420" height="260" src="https://www.youtube.com/embed/eo5lZWeYNZw?si=8H981PtGmLIkBiwv" title="YouTube video player"></iframe>
            </div>
            <div className="mt-1">
              <h2 className={`${twStyles.itemTextH2}`}>Sample02</h2>
              <h3 className={`${twStyles.itemTextH3}`}>sub title</h3>
              <p className="mt-1">サンプルテキスト_sample text</p>
            </div>
          </div>
          <div className={`${twStyles.item}`}>
            <div className={`${twStyles.itemImg01}`}>
              <Image alt="sample_img" className={`${twStyles.itemImg02}`} src="https://dummyimage.com/420x260" width={420} height={260}></Image>
            </div>
            <div className="mt-1">
              <h2 className={`${twStyles.itemTextH2}`}>Sample03</h2>
              <h3 className={`${twStyles.itemTextH3}`}>sub title</h3>
              <p className="mt-1">サンプルテキスト</p>
            </div>
          </div>
          <div className={`${twStyles.item}`}>
            <div className={`${twStyles.itemImg01}`}>
              <iframe  className={`${twStyles.itemImg02}`} width="420" height="260" src="https://www.youtube.com/embed/eo5lZWeYNZw?si=8H981PtGmLIkBiwv" title="YouTube video player"></iframe>
            </div>
            <div className="mt-1">
              <h2 className={`${twStyles.itemTextH2}`}>Sample04</h2>
              <h3 className={`${twStyles.itemTextH3}`}>sub title</h3>
              <p className="mt-1">サンプルテキスト_sample text</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}