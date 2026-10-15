import { prisma } from "@/lib/prisma";

type NoteRouteContext = {
  params: Promise<{ id: string }>;
};

function parseNoteId(value: string) {
  const id = Number(value);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

export async function PATCH(request: Request, { params }: NoteRouteContext) {
  const { id: rawId } = await params;
  const id = parseNoteId(rawId);
  if (id === null) {
    return Response.json({ error: "Invalid note ID." }, { status: 400 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("content" in body) ||
    typeof body.content !== "string" ||
    !body.content.trim()
  ) {
    return Response.json({ error: "Note content is required." }, { status: 400 });
  }

  const existingNote = await prisma.note.findUnique({ where: { id } });
  if (!existingNote) {
    return Response.json({ error: "Note not found." }, { status: 404 });
  }

  const note = await prisma.note.update({
    where: { id },
    data: { content: body.content.trim() },
  });

  return Response.json(note);
}

export async function DELETE(_: Request, { params }: NoteRouteContext) {
  const { id: rawId } = await params;
  const id = parseNoteId(rawId);
  if (id === null) {
    return Response.json({ error: "Invalid note ID." }, { status: 400 });
  }

  const result = await prisma.note.deleteMany({ where: { id } });
  if (result.count === 0) {
    return Response.json({ error: "Note not found." }, { status: 404 });
  }

  return new Response(null, { status: 204 });
}
