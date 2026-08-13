export type SkillStatus = "Advanced" | "Intermediate" | "Beginner";

export interface Skill {
    skill_name: string;
    proficiency: number;
    status: SkillStatus;
    startedAt?: string;
    comment?: string;
}