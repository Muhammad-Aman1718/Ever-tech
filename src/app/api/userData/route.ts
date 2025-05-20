// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/config/prisma";
// import { AxiosError } from "axios";
// import { userData } from "@/types/types";

// export const POST = async (req: NextRequest) => {
//   try {
//     const body: userData = await req.json();
//     const {
//       fullName,
//       fatherName,
//       email,
//       phoneNumber,
//       city,
//       province,
//       education,
//       course,
//       message,
//       profilePic,
//       cnicFront,
//       cnicBack,
//     } = body;

//     console.log("this is user data body ===========>", body);

//     if (
//       !fullName ||
//       !fatherName ||
//       !email ||
//       !phoneNumber ||
//       !city ||
//       !province ||
//       !education ||
//       !course ||
//       !message ||
//       !profilePic ||
//       !cnicFront ||
//       !cnicBack
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "requried all feilds",
//         },
//         { status: 400 }
//       );
//     }

//     const existingUser = await prisma.userData.findUnique({
//       where: {
//         email: email, // Check for duplicate email
//       },
//     });

//     console.log(existingUser, "this is exsiting user ");

//     if (existingUser) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "A user with this email has already submitted the form",
//         },
//         { status: 400 }
//       );
//     }

//     const userFormData = await prisma.userData.create({
//       data: {
//         fullName: fullName,
//         fatherName: fatherName,
//         email: email,
//         phoneNumber: phoneNumber,
//         city: city,
//         province: province,
//         education: education,
//         course: course,
//         message: message,
//         profilePic: profilePic,
//         cnicFront: cnicFront,
//         cnicBack: cnicBack,
//       },
//     });

//     return NextResponse.json({
//       success: true,
//       message: "User Data saved successfully",
//       data: userFormData,
//     });
//   } catch (error) {
//     const errorAxios = error as AxiosError;
//     return NextResponse.json({
//       success: false,
//       message: "Something went wrong",
//       error: errorAxios.message || "Unknown error",
//     });
//   } finally {
//     await prisma.$disconnect();
//   }
// };

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/config/prisma";
import cloudinary from "@/lib/cloudinary";

async function uploadFile(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "uploads" }, (error, result) => {
        if (error) reject(error);
        resolve(result?.secure_url ?? "");
      })
      .end(buffer);
  });
}

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    // Extract text fields
    const fullName = formData.get("fullName") as string;
    const fatherName = formData.get("fatherName") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const city = formData.get("city") as string;
    const province = formData.get("province") as string;
    const education = formData.get("education") as string;
    const course = formData.get("course") as string;
    const message = formData.get("message") as string;

    // Extract files
    const profilePicFile = formData.get("profilePic") as File;
    const cnicFrontFile = formData.get("cnicFront") as File;
    const cnicBackFile = formData.get("cnicBack") as File;

    console.log("This is formData =========> ", formData);

    // Validate all fields
    if (
      !fullName ||
      !fatherName ||
      !email ||
      !phoneNumber ||
      !city ||
      !province ||
      !education ||
      !course ||
      !message ||
      !profilePicFile.size ||
      !cnicFrontFile.size ||
      !cnicBackFile.size
    ) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    console.log("this is validation is pass ============>");

    console.log("this is exsit user check ============>");
    // Check for existing user
    const existingUser = await prisma.userData.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 400 }
      );
    }
    console.log("this is exsit user check is pass ============>");
    console.log("this is img uploading... ");

    // Upload files to Cloudinary
    const [profilePic, cnicFront, cnicBack] = await Promise.all([
      uploadFile(profilePicFile),
      uploadFile(cnicFrontFile),
      uploadFile(cnicBackFile),
    ]);
    console.log("this is img uploading done ");

    // Save to database
    const userData = await prisma.userData.create({
      data: {
        fullName,
        fatherName,
        email,
        phoneNumber,
        city,
        province,
        education,
        course,
        message,
        profilePic,
        cnicFront,
        cnicBack,
      },
    });

    console.log("API Success - Data saved:", userData);
    return NextResponse.json({
      success: true,
      message: "Data saved successfully",
      data: userData,
    });
  } catch (error) {
    console.error("API Error==========> :", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
