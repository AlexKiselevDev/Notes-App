type NoteCardProps = {
  content: string;
  date: string;
  selected?: boolean;
  onClick: () => void;
};

export default function NoteCard({
  content,
  date,
  selected = false,
  onClick,
}: NoteCardProps) {
  return (
    <article>
      <button
        type="button"
        onClick={onClick}
        className={`block w-full cursor-pointer text-left h-[202px] overflow-hidden rounded-[20px] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all ${
          selected
            ? "border border-fuchsia-400"
            : "border border-transparent hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
        }`}
      >
        <p className="line-clamp-8 text-[15px] leading-[21px] text-gray-900">
          {content}
        </p>
      </button>
      <p className="mt-2 text-center text-sm leading-5 text-gray-500">{date}</p>
    </article>
  );
}
