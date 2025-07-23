import { LucideIcon } from "lucide-react";

export interface userData {
  id?: string;
  fullName?: string;
  fatherName?: string;
  email?: string;
  phoneNumber?: string;
  city?: string;
  province?: string;
  education?: string;
  course?: string;
  message?: string;
  status?: string | null;
  profilePic?: string;
  cnicFront?: string;
  cnicBack?: string;
}


export interface adminData {
  token?: string;
  email?: string;
  password?: string;
}

export interface ErrorResponse {
  message: string;
}

export interface StudentTablePropsTypes {
  students: userData[];
  onAccept: (id: string) => void;
  onDecline: (id: string) => void;
  onViewDetails: (id: string) => void;
}

export interface ButtonPropsTypes {
  title?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export interface CoursesCardPropsTypes {
  title?: string;
  level?: string;
  tags?: string[];
  duration?: string;
  students?: string;
}

export interface InformationCardPropsTypes {
  icon?: LucideIcon;
  heading?: string;
  text1?: string;
  text2?: string;
}

export interface FileUploadPropsTypes {
  label: string;
  acceptedFiles?: string;
  onChange: (file: File | null) => void;
  file: File | null;
  required?: boolean;
}

export interface ContactUsInputFieldPropsTypes {
  label?: string;
  inputType?: React.HTMLInputTypeAttribute;
  name?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  placeholder?: string;
  required?: boolean;
}

export interface OurClientsCardPropsTypes {
  clientsName?: string;
}

export interface ProgressCardPropsTypes {
  statLabel?: string;
  statValue?: string;
  statIcon?: LucideIcon;
}

export interface OurCommunityMembersCardPropsTypes {
  name?: string;
  role?: string;
  text?: string;
}

export interface OurCommunityProgressCardPropsTypes {
  color?: string;
  value?: string;
  label?: string;
  icon?: LucideIcon;
}
export interface OurServicesSectionCardPropsTypes {
  title?: string;
  discription?: string;
  icon?: LucideIcon;
}

export interface SelectFieldPropsTypes {
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  options?: string[];
}

export interface MainContainerPropsTypes {
  children?: React.ReactNode;
  className?: string;
}

export interface ContactUs {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface SlicesInitialState {
  userData?: userData[];
  loading: boolean;
  error: string | null;
  submittedData: userData | null;
}
