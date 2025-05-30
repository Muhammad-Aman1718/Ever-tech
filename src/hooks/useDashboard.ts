import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getUserData, updateUserStatus } from "@/store/slices/userData";
import { userData } from "@/types/types";

const useDashboard = () => {
  const [filterStatus, setFilterStatus] = useState<
    null | "Accepted" | "Declined"
  >(null);
  const [selectedStudent, setSelectedStudent] = useState<userData | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userDataReducer.userData);
  console.log("this is selector hook user data ", userData);

  const filteredStudents = userData.filter((student) => {
    if (filterStatus === "Accepted") return student.status === "Accepted";
    if (filterStatus === "Declined") return student.status === "Declined";
    if (filterStatus === null) return student.status === null;
  });

  useEffect(() => {
    const result = dispatch(getUserData());
    console.log("this is result =======> ", result);
  }, []);

  const handleAcceptedStudents = () => setFilterStatus("Accepted");
  const handleDeclinedStudents = () => setFilterStatus("Declined");
  const handleNewStudents = () => {
    console.log("handleNewStudents");
    setFilterStatus(null);
  };

  const handleLogout = () => {
    console.log("this is handleLogout ====> clicked");
    setLoading(true);
    Cookies.remove("adminToken");
    router.push("/admin/login");
    setLoading(false);
  };

  const handleAccept = async (id: string) => {
    console.log("this is handleAccept clicked ");

    await dispatch(updateUserStatus({ id, status: "Accepted" }));
    dispatch(getUserData());
  };

  const handleDecline = async (id: string) => {
    console.log("this is handleDecline clicked ");
    await dispatch(updateUserStatus({ id, status: "Declined" }));
    dispatch(getUserData());
  };
  const handleViewDetails = (id: string) => {
    const student = userData.find((s) => s.id === id);
    setSelectedStudent(student || null);
  };

  return {
    loading,
    filteredStudents,
    filterStatus,
    selectedStudent,
    setSelectedStudent,
    setFilterStatus,
    handleLogout,
    handleAccept,
    handleDecline,
    handleViewDetails,
    handleAcceptedStudents,
    handleDeclinedStudents,
    handleNewStudents,
  };
};
export default useDashboard;
