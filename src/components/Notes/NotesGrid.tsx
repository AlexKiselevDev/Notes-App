"use client";

import EditNoteFrom from "@/components/Notes/EditNoteForm";
import NoteCard from "@/components/Notes/NoteCard";
import { Note } from "@/data/notes";

type NotesGridProps = {
  notes: Note[];
  selectedNoteId: number | null;
  editingNoteId: number | null;
  onSelect: (id: number) => void;
  onEdit: (id: number) => void;
  onSave: (content: string) => void;
  onCancelEdit: () => void;
  onDelete: (id: number) => void;
};

export default function NotesGrid({
  notes,
  selectedNoteId,
  editingNoteId,
  onSelect,
  onEdit,
  onSave,
  onCancelEdit,
  onDelete,
}: NotesGridProps) {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,239px)] justify-start gap-x-8 gap-y-8"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      {notes.map((note) => {
        const isEditing = editingNoteId === note.id;

        return isEditing ? (
          <EditNoteFrom
            key={note.id}
            initialContent={note.content}
            onSave={onSave}
            onCancel={onCancelEdit}
          />
        ) : (
          <NoteCard
            key={note.id}
            content={note.content}
            date={note.date}
            selected={selectedNoteId === note.id}
            onClick={() => onSelect(note.id)}
            onEdit={() => onEdit(note.id)}
            onDelete={() => onDelete(note.id)}
          />
        );
      })}
    </div>
  );
}
