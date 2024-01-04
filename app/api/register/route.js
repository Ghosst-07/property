import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password, number } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    await connectMongoDB();
    await User.create({
      name,
      email,
      password: hashedPassword,
      number,
    });

    console.log(name);

    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
