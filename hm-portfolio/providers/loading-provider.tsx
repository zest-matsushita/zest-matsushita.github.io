"use client";

import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

type LoadingContextType = {
    progress: number;
    isLoading: boolean;
    message: string;
};

export const LoadingContext = createContext<LoadingContextType>({
    progress: 100,
    isLoading: true,
    message: "",
});

type LoadingProviderProps = {
    children: React.ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState("Loading...");
    const pathname = usePathname();

    useEffect(() => {
        // ロード開始
        queueMicrotask(() => {
            setIsLoading(true);
            setProgress(0);
            setMessage("Loading...");
        });

        let p = 0;
        const timer = setInterval(() => {
            p += Math.random() * 5;
            if (p >= 100) {
                p = 100;
                clearInterval(timer);
                setProgress(100);

                // 一定待機後、ローディング終了
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);

                return;
            }
            setProgress(p);
        }, 80);

        return () => clearInterval(timer);
    }, [pathname]);

    return (
        <LoadingContext.Provider value={{ progress, isLoading, message }}>
            {children}
        </LoadingContext.Provider>
    );
}
