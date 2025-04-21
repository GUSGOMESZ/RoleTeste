import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../Services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      navigate("/signin", { replace: true });
    },
    onError: (err) => {
      console.log("Erro: " + err);
    },
  });

  return { signup, isLoading };
}
