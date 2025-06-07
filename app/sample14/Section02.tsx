import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FundraiserCard from "../_components/Parts/FundraiserCard";

export default function S14Sec02() {
  return (
    <div className="bg-muted flex flex-col items-center py-2">
      <h1 className="text-4xl font-bold mb-2 text-center">Fundraising events</h1>
      <p className="text-lg text-muted-foreground mb-8 text-center max-w-xl">
        Flowbite helps you connect with friends, family and communities of people who share your interests.
      </p>
      <div className="flex flex-col md:flex-row gap-6 mb-8 w-full max-w-5xl justify-center">
        <FundraiserCard
          image="/sample01.svg"
          imageAlt="Planting Trees Fundraiser"
          amount="$376,856"
          goal="400k"
          donors="2,756"
          progress={376856 / 400000}
          title="Thank you for supporting in planting trees work."
          description="Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone."
        />
        <FundraiserCard
          image="/sample01.svg"
          imageAlt="Planting Trees Fundraiser"
          amount="$200,000"
          goal="400k"
          donors="2,756"
          progress={200000 / 400000}
          title="Thank you for supporting in planting trees work."
          description="Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone."
        />
      </div>
      <Link href="#" className="flex items-center gap-2 text-primary font-medium hover:underline">
        View all fundraising events <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}