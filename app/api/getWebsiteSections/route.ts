import { NextApiRequest, NextApiResponse } from "next";
import navItems from "@/components/projects/db";
import { NextResponse } from "next/server";

export const GET = (req: NextApiRequest, res: NextApiResponse) => {
  return NextResponse.json({ data: navItems });
};
