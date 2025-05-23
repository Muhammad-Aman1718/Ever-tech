// app/api/adminLogin/route.ts
import { prisma } from "@/config/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log("1. Starting login process");

    // Parse request body
    const body = await request.json();
    console.log("2. Parsed body:", body);

    const { email, password } = body;
    if (!email || !password) {
      console.log("3. Validation failed - missing fields");
      return NextResponse.json(
        { success: false, error: "Missing credentials" },
        { status: 400 }
      );
    }

    console.log("4. Searching user in database");
    const admin = await prisma.admin.findUnique({
      where: { email: email },
    });

    console.log("this is admin =======> ", admin);

    if (!admin) {
      console.log("5. User not found");
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }

    console.log("6. Comparing passwords");
    const passwordValid = await bcrypt.compare(password, admin.password);
    console.log("this is valid password========> ", passwordValid);

    if (!passwordValid) {
      console.log("7. Password mismatch");
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }

    console.log("8. Generating JWT");
    if (!process.env.JWT_SECRET) {
      console.error("9. JWT_SECRET missing");
      throw new Error("JWT secret not configured");
    }

    const token = jwt.sign(
      { userId: admin.id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("10. Login successful");
    return NextResponse.json({
      success: true,
      token,
      role: admin.role,
      userId: admin.id,
    });
  } catch (error) {
    console.error("ERROR STACK TRACE:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        debugInfo:
          process.env.NODE_ENV === "development"
            ? {
                message:
                  error instanceof Error ? error.message : "Unknown error",
                stack: error instanceof Error ? error.stack : undefined,
              }
            : undefined,
      },
      { status: 500 }
    );
  }
}
