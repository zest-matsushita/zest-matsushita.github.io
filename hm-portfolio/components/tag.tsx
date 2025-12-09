interface TagProps {
    name: string;
}

export default function Tag({ name }: TagProps) {
    return (
        <div className="tag text-center border border-text-500 text-[10px] rounded-xl w-auto px-2 py-1">
            #{name}
        </div>

    );
}