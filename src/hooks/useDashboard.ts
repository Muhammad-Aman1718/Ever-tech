import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getUserData, updateUserStatus } from "@/store/slices/userData";

const useDashboard = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userDataReducer.userData);
  const loading = useAppSelector((state) => state.userDataReducer.loading);
  console.log("this is selector hook user data ", userData);

  useEffect(() => {
    const result = dispatch(getUserData());
    console.log("this is result =======> ", result);
  }, []);

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
    handleLogout,
    handleAccept,
    handleDecline,
  };
};
export default useDashboard;
