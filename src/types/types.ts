export interface userData {
  fullName?: string;
  fatherName?: string;
  email?: string;
  phoneNumber?: string;
  city?: string;
  province?: string;
  education?: string;
  course?: string;
  message?: string;
  profilePic?: string;
  cnicFront?: string;
  cnicBack?: string;
}

export interface adminData {
  email?: string;
  password?: string;
}

export interface ErrorResponse {
  message: string;
}
