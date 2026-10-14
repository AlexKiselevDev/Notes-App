"use client";

import { useEffect, useState } from "react";
import CreateNoteForm from "@/components/Notes/CreateNoteForm";
import NotesGrid from "@/components/Notes/NotesGrid";

type Note = {
  id: number;
  content: string;
  date: string;
};

export default function Home() {
  const [noteList, setNoteList] = useState<Note[]>([]);
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const loadNotes = async () => {
      const response = await fetch("/api/notes");

      if (!response.ok) {
        console.error("Failed to load notes");
        return;
      }

      const data = await response.json();

      setNoteList(
        data.map(
          (note: { id: number; content: string; createdAt: string }) => ({
            id: note.id,
            content: note.content,
            date: new Date(note.createdAt).toLocaleString("en-US", {
              day: "numeric",
              month: "long",
              hour: "numeric",
              minute: "2-digit",
            }),
          }),
        ),
      );
    };

    loadNotes();
  }, []);

  const handleCreateNote = async (content: string) => {
    const response = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error("POST status:", response.status);
      console.error("POST response:", errorText);

      return;
    }

    const createdNote = await response.json();

    const newNote = {
      id: createdNote.id,
      content: createdNote.content,
      date: "Just now",
    };

    setNoteList((currentNotes) => [newNote, ...currentNotes]);
    setSelectedNoteId(newNote.id);
    setIsCreating(false);
  };

  const handleEditNote = (id: number) => {
    setEditingNoteId(id);
    setSelectedNoteId(id);
  };

  const handleSaveNote = async (content: string) => {
    if (editingNoteId === null) {
      return;
    }

    const response = await fetch(`/api/notes/${editingNoteId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      console.error("Failed to update note");
      return;
    }

    const updatedNote = await response.json();

    setNoteList((currentNotes) =>
      currentNotes.map((note) =>
        note.id === updatedNote.id
          ? {
              ...note,
              content: updatedNote.content,
            }
          : note,
      ),
    );

    setEditingNoteId(null);
  };

  const handleDeleteNote = async (id: number) => {
    const response = await fetch(`/api/notes/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error("DELETE status:", response.status);
      console.error("DELETE response:", errorText);

      return;
    }

    setNoteList((currentNotes) =>
      currentNotes.filter((note) => note.id !== id),
    );

    setSelectedNoteId(null);
    setEditingNoteId(null);
  };

  return (
    <main
      className="min-h-screen px-10 py-8"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setSelectedNoteId(null);
          setEditingNoteId(null);
        }
      }}
    >
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-[26px] font-semibold leading-8 text-[#262626]">
          Notes
        </h1>

        <button
          type="button"
          aria-label="Create note"
          onClick={() => {
            setIsCreating(true);
            setEditingNoteId(null);
          }}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#262626] transition-colors hover:bg-[#404040]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19Z"
              fill="white"
            />
          </svg>
        </button>
      </header>

      {isCreating && (
        <div className="mb-6">
          <CreateNoteForm
            onCreate={handleCreateNote}
            onCancel={() => setIsCreating(false)}
          />
        </div>
      )}

      <NotesGrid
        notes={noteList}
        selectedNoteId={selectedNoteId}
        editingNoteId={editingNoteId}
        onSelect={(id) => {
          setSelectedNoteId(id);
          setEditingNoteId(null);
        }}
        onEdit={handleEditNote}
        onSave={handleSaveNote}
        onCancelEdit={() => setEditingNoteId(null)}
        onDelete={handleDeleteNote}
      />
    </main>
  );
}
