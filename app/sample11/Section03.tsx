import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function Section03(){
  return(
    <div className="w-full py-10 lg:py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left underline decoration-teal-300">
                事業所概要
              </h2>
            </div>
          </div>
        </div>
        <div className="container mx-auto border-2 border-orange-200 bg-orange-100 p-4 rounded mt-3">
          <Table>
            <TableBody>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 font-medium">事業所名</TableCell>
                <TableCell className="py-2">サンプル訪問看護ステーション</TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 font-medium">所在地</TableCell>
                <TableCell className="py-2">〒123-4567<br/>サンプル県サンプル市サンプル町123</TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 font-medium">電話番号</TableCell>
                <TableCell className="py-2">012-456-7890</TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 font-medium">事業内容</TableCell>
                <TableCell className="py-2">訪問看護事業</TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 font-medium">事業所番号</TableCell>
                <TableCell className="py-2">123456789</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="border-t-4 border-indigo-100 mt-4"></div>
          {/* googlemapをiframeで表示する方法 */}
          <div className="w-full aspect-video overflow-hidden rounded border border-gray-300 mt-4">
            <iframe 
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103706.41364712776!2d139.68131870470597!3d35.68130028953324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1747178447480!5m2!1sja!2sjp"
            loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}