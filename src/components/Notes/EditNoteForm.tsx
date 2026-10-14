"use client";

import { useState } from "react";

type EditNoteFromProps = {
  initialContent: string;
  onSave: (content: string) => void;
  onCancel: () => void;
};

export default function EditNoteFrom({
  initialContent,
  onSave,
  onCancel,
}: EditNoteFromProps) {
  const [content, setContent] = useState(initialContent);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedContent = content.trim();
    if (!trimmedContent) {
      return;
    }
    onSave(trimmedContent);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-[228px] max-h-[228px] min-w-[239px] max-w-[239px] rounded-[24px] border border-fuchsia-400 bg-white p-5 shadow-[0px_0px_1px_rgba(0,0,0,0.16),0px_3px_8px_rgba(0,0,0,0.06)]"
    >
      <textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
        autoFocus
        className="h-[130px] w-full resize-none bg-transparent text-[15px] leading-[21px] text-gray-900 outline-none"
      />
      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!content.trim()}
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        >
          Save
        </button>
      </div>
    </form>
  );
}
