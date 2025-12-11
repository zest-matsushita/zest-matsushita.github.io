"use client";

import { useEffect, useState } from "react";

export function usePointerLabel() {
    const [label, setLabel] = useState("click"); // 初期値はPC想定

    useEffect(() => {
        if (typeof window === "undefined") return;

        // pointer が coarse（指）ならスマホ/タブレット
        const isCoarse = window.matchMedia("(pointer: coarse)").matches;

        queueMicrotask(() => {
            setLabel(isCoarse ? "tap" : "click");
        });
    }, []);

    return label;
}
