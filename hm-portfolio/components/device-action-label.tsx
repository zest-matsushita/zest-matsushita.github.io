"use client";

import { usePointerLabel } from "@/hooks/use-pointer-label";

export default function DeviceActionLabel() {
    const label = usePointerLabel();

    return (
        <span className="text-sm">
            {label} me!
        </span>
    );
}
