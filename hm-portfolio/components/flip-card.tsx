"use client";

import { useState } from "react";

export default function FlipCard() {

    const [flip, setFlip] = useState(false);

    return (
        <div
            className="perspective w-full h-full cursor-pointer"
            onClick={() => setFlip(prev => !prev)}
        >
            <div className={`
        relative preserve-3d duration-700 w-full h-full
        ${flip ? "rotate-y-180" : ""}
      `}>
                <div className="absolute inset-0 backface-hidden flex items-center justify-center bg-blue-500 text-white rounded-xl">
                    Front
                </div>
                <div className="absolute inset-0 rotate-y-180 backface-hidden flex items-center justify-center bg-rose-500 text-white rounded-xl">
                    Back
                </div>
            </div>
        </div>
    );
}
