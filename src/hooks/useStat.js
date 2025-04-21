import { useMutation } from "@tanstack/react-query";
import { createStat as createStatApi } from "../Services/apiStats";

export function useStat() {
  const { mutate: createStat, isLoading } = useMutation({
    mutationFn: createStatApi,
    onSuccess: () => {},
    onError: (err) => {
      console.log("Error: " + err);
    },
  });

  return { createStat, isLoading };
}
