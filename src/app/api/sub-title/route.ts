import subTitle from "@/models/subTitle";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await subTitle.find({});
  return NextResponse.json(data);
}
