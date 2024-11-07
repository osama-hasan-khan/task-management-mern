import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetProfile = () => {
  const [profile, setProfile] = useState("");

  const getProfile = useCallback(async () => {
    try {
      const response = await fetch("/api/users/getProfile");

      const data = await response.json();

      setProfile(data);

      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }
    } catch (error) {
      toast.error("Error during logout:", error.message);
    }
  });
  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return { profile, refetchProfile: getProfile };
};

export default useGetProfile;
