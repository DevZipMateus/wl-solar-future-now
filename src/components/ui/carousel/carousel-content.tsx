
import * as React from "react";
import { cn } from "@/lib/utils";
import { useCarousel } from "./carousel-context";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden w-full h-full embla">
      <div
        ref={ref}
        className={cn(
          "flex w-full h-full embla__container",
          orientation === "horizontal" ? "" : "flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

export { CarouselContent };
