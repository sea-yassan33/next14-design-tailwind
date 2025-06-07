import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share2 } from "lucide-react";
import { FundraiserCardProps } from "@/lib/interfaceUtils";

export default function FundraiserCard({
  image,
  imageAlt,
  imageClassName,
  amount,
  goal,
  donors,
  progress,
  title,
  description,
}: FundraiserCardProps) {
  return (
    <Card className="w-full max-w-md flex-1">
      <CardContent className="p-4">
        <div className="w-full h-48 mb-4 relative rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={`object-cover ${imageClassName || ""}`}
            priority
          />
        </div>
        <div className="flex items-end gap-2 mb-1">
          <span className="text-lg font-bold">{amount}</span>
          <span className="text-sm text-muted-foreground">
            of {goal} goal
          </span>
        </div>
        <div className="flex items-center justify-between text-xs mb-2">
          <div className="w-full mr-2 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: `${Math.min(progress * 100, 100)}%` }}
            />
          </div>
          <span className="text-muted-foreground whitespace-nowrap">{donors} donors</span>
        </div>
        <div className="mb-2 font-semibold">{title}</div>
        <div className="mb-4 text-sm text-muted-foreground">{description}</div>
        <div className="flex gap-2">
          <Button>{/* variant="primary" by default in shadcn/ui */}Donate now</Button>
          <Button variant="outline">
            <Share2 className="w-4 h-4 mr-2" />
            Share this Fundraiser
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}