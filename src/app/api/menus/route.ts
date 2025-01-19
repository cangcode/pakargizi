import { NextResponse } from 'next/server';
import { db, menusTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: Request) {
  try {
    // Parse query string
    const { searchParams } = new URL(req.url);
    const tujuan = searchParams.get('tujuan');

    // Filter menus based on tujuan if provided
    let menus;
    if (tujuan) {
      menus = await db
        .select()
        .from(menusTable)
        .where(eq(menusTable.program, tujuan));
    } else {
      menus = await db.select().from(menusTable);
    }

    return NextResponse.json(menus, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch menus' }, { status: 500 });
  }
}
