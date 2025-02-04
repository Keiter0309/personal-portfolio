import skill from "@/models/skill";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await skill.find();
  return NextResponse.json(data);
}
