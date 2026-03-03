import { cn } from "@/lib/utils"
import { Marquee } from "../ui/marquee"
import { reviews } from "@/lib/constants/en"
import Image from "next/image"

const ReviewCard = ({
  img,
  name
}: {
  img: string
  name: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-40 cursor-pointer overflow-hidden rounded-lg border p-4",
        // light styles
        "border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5 backdrop-blur-xs",
        // dark styles
        "dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15 backdrop-blur-xs"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full size-8" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-lg font-semibold dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  )
}

export function MarqueeAnimation() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="from-white via-white to-transparent pointer-events-none absolute z-10 inset-y-0 left-0 w-1/4 sm:w-1/3 bg-linear-to-r"></div>
      <div className="from-white via-white to-transparent pointer-events-none absolute z-10 inset-y-0 right-0 w-1/4 sm:w-1/3 bg-linear-to-l"></div>
      <div className="hidden sm:block from-white via-white to-transparent pointer-events-none absolute z-12 inset-y-0 left-0 w-1/3 bg-linear-to-r"></div>
      <div className="hidden sm:block from-white via-white to-transparent pointer-events-none absolute z-12 inset-y-0 right-0 w-1/3 bg-linear-to-l"></div>
    </div>
  )
}
