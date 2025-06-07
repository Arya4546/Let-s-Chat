import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";

const useAuthUser = () => {
  const authUserQuery = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: false, // auth check
  });

  console.log("useAuthUser: query state =", {
    isLoading: authUserQuery.isLoading,
    data: authUserQuery.data,
    error: authUserQuery.error,
  });

  return { isLoading: authUserQuery.isLoading, authUser: authUserQuery.data?.user };
};

export default useAuthUser;