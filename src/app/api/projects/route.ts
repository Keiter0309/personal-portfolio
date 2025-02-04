import { NextResponse } from "next/server";

const projects = [
  {
    id: 1,
    title: "DictioHub Dictionary",
    description: "A dictionary app using MySQL and AWS.",
  },
  {
    id: 2,
    title: "Breezy Weather App",
    description: "A weather app using OpenWeather API.",
  },
];

export async function GET() {
  return NextResponse.json(projects);
}
