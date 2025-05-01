// app/api/add/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json(); // Parse the JSON body
    console.log("Received data:", data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API Error:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
