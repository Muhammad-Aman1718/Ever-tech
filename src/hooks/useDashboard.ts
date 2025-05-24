import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const useDashboard = () => {
  const router = useRouter();

  const handleLogout = () => {
    console.log("this is handleLogout ====> clicked");

    Cookies.remove("adminToken");
    router.push("/admin/login");
  };

  return {
    handleLogout,
  };
};
export default useDashboard;
