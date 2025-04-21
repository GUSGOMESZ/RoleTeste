import { useMutation } from "@tanstack/react-query";
import { signin as signinApi } from "../../Services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => signinApi({ email, password }),
    onSuccess: () => {
      navigate("/roulette", { replace: true });
    },
    onError: (err) => {
      console.log("Error: " + err);
    },
  });

  return { login, isLoading };
}
