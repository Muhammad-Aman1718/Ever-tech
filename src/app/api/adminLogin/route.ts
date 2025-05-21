// app/api/admin/login/route.ts
import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "@/config/prisma";

const SECRET = process.env.JWT_SECRET || "ZXZlclRlY2hTb2x1dGlvbnM";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password required" },
      { status: 400 }
    );
  }

  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = jwt.sign({ adminId: admin.id }, SECRET, { expiresIn: "1d" });

  return NextResponse.json(
    { message: "Login successful", token },
    { status: 200 }
  );
};
