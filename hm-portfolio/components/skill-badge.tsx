import { Skill } from "@/types/skill";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";

interface SkillIconProps {
    skill_name: string;
    className?: string; // Tailwind などでサイズや色を指定したい場合
}

function SkillIcon({ skill_name, className = "w-6 h-6" }: SkillIconProps) {
    switch (skill_name) {
        case "Angular":
            return <i className={`devicon-angular-plain ${className}`}></i>;
        case "React":
            return <i className={`devicon-react-original ${className}`}></i>;
        case "Vue.js":
            return <i className={`devicon-vuejs-plain ${className}`}></i>;
        case "Next.js":
            return <i className={`devicon-nextjs-plain colored ${className}`}></i>;
        case "Nativescript":
            return <Image src="/nativescript-svgrepo-com.svg" alt="Nativescriptアイコン" width={26} height={26} loading="lazy" />;
        case "Flutter":
            return <i className={`devicon-flutter-plain ${className}`}></i>;
        case "Django":
            return <i className={`devicon-django-plain ${className}`}></i>;
        case "Python":
            return <i className={`devicon-python-plain ${className}`}></i>;
        case "Swift":
            return <i className={`devicon-swift-plain ${className}`}></i>;
        case "HTML":
            return <i className={`devicon-html5-plain ${className}`}></i>;
        case "CSS":
            return <i className={`devicon-css3-plain ${className}`}></i>;
        case "Tailwind CSS":
            return <i className={`devicon-tailwindcss-original ${className}`}></i>;
        case "Bootstrap":
            return <i className={`devicon-bootstrap-plain ${className}`}></i>;
        case "C#":
            return <i className={`devicon-csharp-plain ${className}`}></i>;
        case "PostgreSQL":
            return <i className={`devicon-postgresql-plain ${className}`}></i>;
        case "Git":
            return <i className={`devicon-git-plain ${className}`}></i>;
        case "Docker":
            return <i className={`devicon-docker-plain ${className}`}></i>;
        case "Figma":
            return <i className={`devicon-figma-plain ${className}`}></i>;
        case "Jest":
            return <i className={`devicon-jest-plain ${className}`}></i>;
        case "Playwright":
            return <i className={`devicon-playwright-plain ${className}`}></i>;
        default:
            return <i className={`devicon-javascript-plain ${className}`}></i>; // デフォルトアイコン
    }
}

interface SkillProgressProps {
    skill: Skill;
    className?: string
}

export default function SkillBadge({ skill, className }: SkillProgressProps) {
    const [flip, setFlip] = useState(false);

    return (
        <div
            className="perspective w-full h-full cursor-pointer  transition-transform duration-300 hover:rotate-3"
            onClick={() => setFlip(prev => !prev)}
        >
            <div className={`
            relative preserve-3d duration-700 w-full h-full
            ${flip ? "rotate-y-180" : ""}
          `}>
                <div className={cn(`absolute inset-0 backface-hidden flex flex-col items-center justify-evenly border-3 border-text-500 rounded-xl p-1 transition bg-base-500 ${className}`)}>
                    <SkillIcon skill_name={skill.skill_name} className="text-2xl" />
                    <div className="w-full">
                        <div className="relative text-xs bg-text-200 text-text-500 text-center tracking-normal font-semibold z-10 p-0.5 rounded-sm">
                            {skill.status}
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 rotate-y-180 backface-hidden flex flex-col items-center justify-around bg-text-500 text-base-500 rounded-xl p-1">
                    <p className="text-sm text-center wrap-break-word font-medium px-1">{skill.skill_name}</p>
                    <div className="flex flex-col justify-center items-center font-zen-kaku-gothic-new">
                        <p className="text-xs">{skill.experience}</p>
                        {skill.comment != null && <p className="text-xs">{skill.comment}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
