import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/config/prisma";
import cloudinary from "@/lib/cloudinary";

async function uploadFile(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "uploads" },
      (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error); // ✅ Better logging
          reject(error);
        } else if (result?.secure_url) {
          resolve(result.secure_url);
        } else {
          reject(new Error("Upload failed without error message"));
        }
      }
    );

    stream.end(buffer); // Ensure buffer is properly ended
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
    const status = formData.get("status") as string | null;

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
        status,
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

export const GET = async (req: NextRequest) => {
  try {
    const users = await prisma.userData.findMany();
    console.log("this is users of get api =======> ", users);

    return NextResponse.json(
      {
        success: true,
        message: "Users fetched successfully",
        data: users,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching user data:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch user data",
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // Graceful disconnect (safe in API routes)
  }
};

export const PUT = async (
  req: NextRequest
  // { params }: { params: { id: string } }
) => {
  try {
    // const { id } = params;
    const body = await req.json();

    console.log("this is put api id and status ======>", body);

    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { message: "Id and Status is required" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.userData.update({
      where: { id },
      data: { status },
    });
    console.log("this is put api updated user ======>", updatedUser);
    return NextResponse.json(
      { message: "Status updated", data: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Status update error:", error);
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
};
