import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getUserData, updateUserStatus } from "@/store/slices/userData";

const useDashboard = () => {
  const [acceptStudent, setAcceptStudent] = useState(false);
  const [declineStudent, setDeclineStudent] = useState(false);
  const [newStudent, setNewStudent] = useState(true);

  const router = useRouter();

  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userDataReducer.userData);
  const loading = useAppSelector((state) => state.userDataReducer.loading);
  console.log("this is selector hook user data ", userData);

  const acceptedStudents = userData.filter(
    (user) => user.status === "Accepted"
  );
  console.log("this is accepted students ======> ", acceptedStudents);
  const declinedStudents = userData.filter(
    (user) => user.status === "Declined"
  );
  console.log("this is Declined students ======> ", declinedStudents);
  const newStudents = userData.filter((user) => user.status === null);
  console.log("this is new students =====> ", newStudents);

  useEffect(() => {
    const result = dispatch(getUserData());
    console.log("this is result =======> ", result);
  }, []);

  const handleAcceptedStudents = () => {
    setAcceptStudent(true);
    setDeclineStudent(false);
    setNewStudent(false);
  };
  const handleDeclinedStudents = () => {
    setAcceptStudent(false);
    setDeclineStudent(true);
    setNewStudent(false);
  };
  const handleNewStudents = () => {
    setAcceptStudent(false);
    setDeclineStudent(false);
    setNewStudent(true);
  };

  const handleLogout = () => {
    console.log("this is handleLogout ====> clicked");

    Cookies.remove("adminToken");
    router.push("/admin/login");
  };

  const handleAccept = (id: string) => {
    console.log("this is handleAccept clicked ");

    dispatch(updateUserStatus({ id, status: "Accepted" }));
  };

  const handleDecline = (id: string) => {
    console.log("this is handleDecline clicked ");
    dispatch(updateUserStatus({ id, status: "Declined" }));
  };

  return {
    userData,
    loading,
    acceptedStudents,
    declinedStudents,
    newStudents,
    handleLogout,
    handleAccept,
    handleDecline,
  };
};
export default useDashboard;
