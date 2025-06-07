import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../lib/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useSignUp = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log("Signup success, response:", data);
      // Manually set authUser data to avoid refetch delay
      queryClient.setQueryData(["authUser"], { user: data.user });
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      toast.success("Account created successfully!");
      // Navigate after a short delay to ensure state updates
      setTimeout(() => {
        navigate("/onboarding", { replace: true });
        console.log("Navigating to /onboarding after signup");
      }, 0);
    },
    onError: (error) => {
      console.error("Signup error:", error.response?.data || error.message);
      toast.error(error?.response?.data?.message || "Signup failed. Please try again.");
    },
  });

  return { isPending, error, signupMutation: mutate };
};

export default useSignUp;