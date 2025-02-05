import skill from "@/models/skill";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  if (!id) {
    return NextResponse.json(
      { error: "Skill ID is required" },
      { status: 400 }
    );
  }
  try {
    const data = await skill.findById(id);
    if (!data) {
      return NextResponse.json({ error: "Skill not found" }, { status: 404 });
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await req.json();

  if (!id || !body.skillName || !body.skillLinks) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  try {
    console.log(id, body);
    return NextResponse.json(
      { message: "Skill updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
