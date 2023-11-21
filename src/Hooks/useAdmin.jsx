import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loeading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isPending: isAdminLoding } = useQuery({
    enabled: !loeading,
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      // console.log(res.data);
      return res.data.admin;
    },
  });

  return [isAdmin, isAdminLoding];
};

export default useAdmin;
