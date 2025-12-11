import { cn } from "@/utils/cn";

type LayeredTextProps = {
    lines: string[];
    colorFront?: string;  // 前面文字色
    colorBack?: string;   // 背面文字色
    textSize?: string;
    fontClass?: string;
    insetClass?: string;
    className?: string;   // 配置調整用
};

export default function LayeredText({
    lines,
    colorFront = "text-text-500",
    colorBack = "text-accent-300",
    textSize = "text-sm",
    fontClass = "",
    insetClass = "inset-1",
    className = "",
}: LayeredTextProps) {
    const base = `${fontClass} ${textSize} leading-none m-0 whitespace-nowrap`;

    return (
        <div className={cn(`relative hidden md:block overflow-visible`, className && `${className}`)}>
            {/* 背面 */}
            <div className={cn(`absolute ${insetClass} ${base} ${colorBack} select-none`)}>
                {lines.map((line, idx) => (
                    <p key={idx} className="m-0 leading-none">
                        {line}
                    </p>
                ))}
            </div>

            {/* 前面 */}
            <div className={cn(`relative ${base} ${colorFront}`)}>
                {lines.map((line, idx) => (
                    <p key={idx} className="m-0 leading-none">
                        {line}
                    </p>
                ))}
            </div>
        </div>
    );
}
