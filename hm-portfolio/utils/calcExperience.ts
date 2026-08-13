export function calcExperience(startedAt: string): string {
    const start = new Date(startedAt + "-01");
    const now = new Date();
    const months =
        (now.getFullYear() - start.getFullYear()) * 12 +
        (now.getMonth() - start.getMonth());
    if (months < 12) return `<1 years`;
    const years = Math.floor(months / 12);
    return `${years} years`;
}