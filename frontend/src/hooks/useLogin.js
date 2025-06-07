import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../lib/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("Login success, response:", data);
      // Manually set authUser data to avoid refetch delay
      queryClient.setQueryData(["authUser"], { user: data.user });
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      toast.success("Login successful!");
      // Navigate after a short delay to ensure state updates
      setTimeout(() => {
        navigate("/onboarding", { replace: true });
        console.log("Navigating to /onboarding after login");
      }, 0);
    },
    onError: (error) => {
      console.error("Login error:", error.response?.data || error.message);
      toast.error(error?.response?.data?.message || "Login failed. Please try again.");
    },
  });

  return { error, isPending, loginMutation: mutate };
};

export default useLogin;