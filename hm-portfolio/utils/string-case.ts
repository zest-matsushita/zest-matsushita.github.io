export const toPascalSnakeCase = (str: string): string => {
    return str
        .replace(/[^a-zA-Z0-9]+/g, " ")
        .trim()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join("_");
};

export function toScreamingSnakeCase(str: string): string {
    return str
        // camelCase / PascalCase を単語に分ける
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/[^a-zA-Z0-9]+/g, " ")
        .trim()
        .split(/\s+/)
        .map(w => w.toUpperCase())
        .join("_");
}

