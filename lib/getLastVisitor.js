import { cookies } from "next/headers";

export async function getLastVisitor() {
  const cookieStore = await cookies();
  return cookieStore.get("last-visitor")?.value || null;
}
