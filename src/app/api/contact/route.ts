import contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await contact.find();
  return NextResponse.json(data);
}
