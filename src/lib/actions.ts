import { db, menusTable } from "@/db/schema"
import { eq } from "drizzle-orm"

export const getMenus = async (category:string) => {
    try {
        const result = await db
          .select()
          .from(menusTable)
          .where(eq(menusTable.program, category));
        return result;
      } catch (error) {
        console.error('Error fetching menus:', error);
        throw error;
      }
}