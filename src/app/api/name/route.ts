import name from "@/models/name";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await name.find();
  return NextResponse.json(data);
}
