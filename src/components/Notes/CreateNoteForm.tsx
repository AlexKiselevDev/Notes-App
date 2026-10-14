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
      className="flex min-h-[228px] min-w-[239px] max-w-[239px] flex-col items-start justify-start cursor-pointer overflow-hidden rounded-[24px] border bg-white p-5 text-left shadow-[0px_0px_1px_rgba(0,0,0,0.16),0px_3px_8px_rgba(0,0,0,0.06)] transition-all border-transparent"
    >
      <textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
        autoFocus
        placeholder="Write a note..."
        className="h-[130px] w-full resize-none bg-transparent text-[15px] leading-[21px] text-gray-900 outline-none placeholder:text-gray-400"
      />
      <div className="w-[100%] mt-4 flex justify-end gap-2">
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
