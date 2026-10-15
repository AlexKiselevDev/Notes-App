import { prisma } from "@/lib/prisma";

export async function GET() {
  const notes = await prisma.note.findMany({
    orderBy: { createdAt: "desc" },
  });

  return Response.json(notes);
}

export async function POST(request: Request) {
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

  const note = await prisma.note.create({
    data: { content: body.content.trim() },
  });

  return Response.json(note, { status: 201 });
}
