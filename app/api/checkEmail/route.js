// /api/checkEmail.js

import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";

// Connect to MongoDB
connectMongoDB();

export async function POST(req) {
  try {
    const { email, number } = await req.json();

    // Find the email and number in MongoDB
    const user = await User.findOne({
      $or: [{ email }, { number }],
    });

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 400 });
  }
}
