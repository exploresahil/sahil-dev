import { NextResponse } from "next/server";
import navItems from "@/components/projects/db";

export const GET = (req: Request) => {
  return NextResponse.json({ data: navItems });
};
