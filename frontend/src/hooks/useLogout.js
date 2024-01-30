import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser } from "../redux/userSlice";

const useLogout = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const logout = useCallback(async () => {
    try {
      const response = await fetch("/api/users/logoutUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      dispatch(logoutUser());

      if (!response.ok) {
        return toast.error(data.error);
      }

      if (response.ok) {
        toast.success(data.message);
      }

      navigate("/login");
    } catch (error) {
      toast.error("Error during logout:", error.message);
    }
  });
  return { logout };
};

export default useLogout;
