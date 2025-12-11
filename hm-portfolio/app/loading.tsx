"use client";

import { LoadingContext } from "@/providers/loading-provider";
import { cn } from "@/utils/cn";
import { useContext } from "react";

export default function Loading() {
  const { progress, isLoading } = useContext(LoadingContext);

  if (!isLoading) return null;

  return (
    <div className={cn(
      "fixed inset-0 flex flex-col items-center justify-center bg-text-500 text-base-500 z-1000")}>
      <div className={cn("text-4xl mb-5 font-josefin-sans font-medium", progress == 100 && "md:animate-ping")}>{Math.floor(progress)}<span className="text-2xl ml-1">%</span></div>
      <div className={cn(
        "w-64 h-3 bg-base-600",
        progress == 100 && "bg-accent-500 md:animate-ping",
      )}>
        <div
          className={cn(
            "h-full bg-accent-500 transition-all",
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
