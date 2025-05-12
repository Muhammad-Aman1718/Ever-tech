import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/config/prisma";
import { AxiosError } from "axios";
// import { userData } from "@/types/types";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const {
      fullName,
      fatherName,
      email,
      phoneNumber,
      city,
      province,
      education,
      course,
      message,
    } = body;

    console.log("this is user data body ===========>", body);

    if (
      !fullName ||
      !fatherName ||
      !email ||
      !phoneNumber ||
      !city ||
      !province ||
      !education ||
      !course ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "requried all feilds",
        },
        { status: 400 }
      );
    }

    const existingUser = await prisma.userData.findUnique({
      where: {
        email: email, // Check for duplicate email
      },
    });

    console.log(existingUser, "this is exsiting user ");

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "A user with this email has already submitted the form",
        },
        { status: 400 }
      );
    }

    const userFormData = await prisma.userData.create({
      data: {
        fullName: fullName,
        fatherName: fatherName,
        email: email,
        phoneNumber: phoneNumber,
        city: city,
        province: province,
        education: education,
        course: course,
        message: message,
      },
    });

    return NextResponse.json({
      success: true,
      message: "User Data saved successfully",
      data: userFormData,
    });
  } catch (error) {
    const errorAxios = error as AxiosError;
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
      error: errorAxios.message || "Unknown error",
    });
  } finally {
    await prisma.$disconnect();
  }
};
