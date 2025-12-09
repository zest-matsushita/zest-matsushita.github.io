export type SkillStatus = "Advanced" | "Intermediate" | "Beginner";

export interface Skill {
    skill_name: string;
    proficiency: number;
    status: SkillStatus;
    experience?: string;
    comment?: string;
}

export const statusColor: Record<SkillStatus, string> = {
    Advanced: "text-green-600",
    Intermediate: "text-yellow-600",
    Beginner: "text-gray-500",
};


