"use client";

import CreateNoteForm from "@/components/Notes/CreateNoteForm";
import NoteCard from "@/components/Notes/NoteCard";
import { Note } from "@/data/notes";

type NotesGridProps = {
  notes: Note[];
  selectedNoteId: number | null;
  isCreating: boolean;
  onCreate: (content: string) => void;
  onCancelCreate: () => void;
  onSelect: (id: number) => void;
  onSave: (id: number, content: string) => void;
  onDelete: (id: number) => void;
};

export default function NotesGrid({
  notes,
  selectedNoteId,
  isCreating,
  onCreate,
  onCancelCreate,
  onSelect,
  onSave,
  onDelete,
}: NotesGridProps) {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,239px)] justify-start gap-x-8 gap-y-8"
      onClick={(event) => event.stopPropagation()}
    >
      {isCreating && (
        <CreateNoteForm onCreate={onCreate} onCancel={onCancelCreate} />
      )}

      {notes.map((note) => (
        <NoteCard
          key={note.id}
          content={note.content}
          date={note.date}
          selected={selectedNoteId === note.id}
          onClick={() => onSelect(note.id)}
          onSave={(content) => onSave(note.id, content)}
          onDelete={() => onDelete(note.id)}
        />
      ))}
    </div>
  );
}
