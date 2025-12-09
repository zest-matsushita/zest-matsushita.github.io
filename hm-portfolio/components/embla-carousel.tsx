'use client';
import Tag from "@/components/tag";
import { cn } from "@/utils/cn";
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { Pickaxe } from "lucide-react";

type SlideProps = {
    children: React.ReactNode
    className?: string
}

export const Slide = ({ children, className }: SlideProps) => {
    return (
        <div
            className={cn(
                "flex flex-[0_0_85%] flex-col justify-around items-center gap-1 p-4 min-w-0 border-2 border-text-500 bg-base-200 rounded-sm",
                className
            )}
        >
            {children}
        </div>
    )
}

export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({
        dragFree: true, loop: true
    }, [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
    ])

    return (
        <div
            className="embla overflow-hidden w-full"
            ref={emblaRef}
        >
            <div className="flex gap-4 px-4 touch-pan-x">
                {/* <Slide className='h-auto gap-2'>
                    <h4 className="text-sm font-semibold">PORTFOLIO</h4>
                    <div className="w-full h-full min-h-[180px] flex justify-center items-center gap-0.5 border border-text-500 rounded-md bg-accent-200">
                        <ImageIcon size={20} />
                    </div>
                    <div className="tag-wrappeer w-full flex flex-wrap justify-items-start gap-1">
                        <Tag name="InProgress" />
                        <Tag name="Next.js" />
                    </div>
                </Slide> */}
                {[...Array(3)].map((_, i) => (
                    <Slide key={i} className='h-auto gap-2'>
                        <h4 className="text-sm font-semibold">In Progress</h4>
                        <div className="w-full h-full min-h-[180px] flex justify-center items-center gap-0.5 border border-text-500 rounded-md bg-accent-200">
                            In Progress
                            <Pickaxe size={20} />
                        </div>
                        <div className="tag-wrappeer w-full flex flex-wrap justify-items-start gap-0.5">
                            <Tag name="InProgress" />
                        </div>
                    </Slide>
                ))}

            </div>
        </div>
    )
}

