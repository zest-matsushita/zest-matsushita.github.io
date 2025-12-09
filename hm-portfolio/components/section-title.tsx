
interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex items-center justify-center mx-2 my-10">
      <h2 className="text-3xl font-extrabold text-center">
        {title}
      </h2>
    </div>
  );
}
