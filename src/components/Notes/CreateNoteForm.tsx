"use client";

import { useState } from "react";

type CreateNoteFormProps = {
  onCreate: (content: string) => void;
  onCancel: () => void;
};

export default function CreateNoteForm({
  onCreate,
  onCancel,
}: CreateNoteFormProps) {
  const [content, setContent] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedContent = content.trim();
    if (!trimmedContent) {
      return;
    }
    onCreate(trimmedContent);
    setContent("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[20px] border border-gray-200 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
    >
      <textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
        autoFocus
        placeholder="Write a note..."
        className="h-[130px] w-full resize-none bg-transparent text-[15px] leading-[21px] text-gray-900 outline-none placeholder:text-gray-400"
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
          Create
        </button>
      </div>
    </form>
  );
}
