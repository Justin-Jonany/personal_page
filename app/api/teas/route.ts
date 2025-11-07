import { NextResponse } from "next/server";
import { teaDb } from "@/lib/db/tea-db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const teaId = searchParams.get("id");

  if (teaId) {
    const tea = teaDb.findById(teaId);
    if (!tea) {
      return NextResponse.json({ error: `Tea '${teaId}' was not found.` }, { status: 404 });
    }
    return NextResponse.json({ tea });
  }

  return NextResponse.json({ teas: teaDb.list() });
}
