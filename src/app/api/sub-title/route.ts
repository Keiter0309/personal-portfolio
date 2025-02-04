import { NextResponse } from "next/server";

const subTitle = {
  id: 1,
  title: "A Web Developer",
};

export async function GET() {
  return NextResponse.json(subTitle);
}
