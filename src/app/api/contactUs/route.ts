import { NextResponse } from "next/server";
import { prisma } from "@/config/prisma";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    console.log("this is contact us body", body);

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check for duplicate email
    const existingContact = await prisma.contact.findUnique({
      where: {
        email: email,
      },
    });

    if (existingContact) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.create({
      data: {
        firstName,
        lastName,
        email,
        subject,
        message,
      },
    });

    return NextResponse.json(
      { message: "Message sent successfully", data: contact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
