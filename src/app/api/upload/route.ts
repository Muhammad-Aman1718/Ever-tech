// import { NextRequest, NextResponse } from "next/server";
// import cloudinary from "@/lib/cloudinary";

// export async function POST(req: NextRequest) {
//   const formData = await req.formData();
//   const file = formData.get("file") as File;

//   if (!file) {
//     return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
//   }

//   const bytes = await file.arrayBuffer();
//   const buffer = Buffer.from(bytes);

//   const result = await new Promise((resolve, reject) => {
//     cloudinary.uploader
//       .upload_stream({ folder: "uploads" }, (err, result) => {
//         if (err) return reject(err);
//         resolve(result);
//       })
//       .end(buffer);
//   });

//   return NextResponse.json(result);
// }

import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

const uploadToCloudinary = (buffer: Buffer, folder: string) =>
  new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder, resource_type: "auto" }, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      })
      .end(buffer);
  });

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const files = {
      profilePic: formData.get("profilePic") as File | null,
      cnicFront: formData.get("cnicFront") as File | null,
      cnicBack: formData.get("cnicBack") as File | null,
    };

    if (!files.profilePic || !files.cnicFront || !files.cnicBack) {
      return NextResponse.json(
        { error: "All pics are requried" },
        { status: 400 }
      );
    }

    const processFile = async (file: File) => {
      if (!file.type.startsWith("image/")) {
        throw new Error("Only pics were accepted ");
      }
      if (file.size > 5 * 1024 * 1024) {
        throw new Error("File Conatianes only 5MB size");
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      return uploadToCloudinary(buffer, "course_applications");
    };

    const [profilePic, cnicFront, cnicBack] = await Promise.all([
      processFile(files.profilePic),
      processFile(files.cnicFront),
      processFile(files.cnicBack),
    ]);

    const responseData = {
      profilePic: (profilePic as any).secure_url,
      cnicFront: (cnicFront as any).secure_url,
      cnicBack: (cnicBack as any).secure_url,
    };

    return NextResponse.json(responseData);
  } catch (error: any) {
    console.error("Upload Error : ", error);
    return NextResponse.json(
      { error: error.message || "Sever Error" },
      { status: 500 }
    );
  }
}
