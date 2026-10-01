"use client";

import { useState } from "react";
import NoteCard from "@/components/Notes/NoteCard";
import CreateNoteForm from "@/components/Notes/CreateNoteForm";
import { notes } from "@/data/notes";

export default function Home() {
  const [noteList, setNoteList] = useState(notes);
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(2);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateNote = (content: string) => {
    const newNote = {
      id: Date.now(),
      content,
      date: "Just now",
    };
    setNoteList((currentNotes) => [newNote, ...currentNotes]);
    setSelectedNoteId(newNote.id);
    setIsCreating(false);
  };

  return (
    <main className="min-h-screen px-10 py-8">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-[26px] font-semibold leading-8 text-gray-900">
          Notes
        </h1>
        <button
          type="button"
          aria-label="Create note"
          onClick={() => setIsCreating(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-2xl font-light leading-none text-white transition-colors hover:bg-gray-800"
        >
          +
        </button>
      </header>
      <div className="grid grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        {isCreating && (
          <CreateNoteForm
            onCreate={handleCreateNote}
            onCancel={() => setIsCreating(false)}
          />
        )}
        {noteList.map((note) => (
          <NoteCard
            key={note.id}
            content={note.content}
            date={note.date}
            selected={selectedNoteId === note.id}
            onClick={() => setSelectedNoteId(note.id)}
          />
        ))}
      </div>
    </main>
  );
}
