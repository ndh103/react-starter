import { useQuery } from "@tanstack/react-query";
import httpClient from "./http-client";

const useQueryListTaskAsync = () =>
	useQuery({
		queryKey: ["tasks"],
		queryFn: async (): Promise<TaskItem[]> =>
			await httpClient.get("/tasks").then((r) => r.data),
		staleTime: 1 * 1000,
		refetchOnMount: true,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	});

export { useQueryListTaskAsync };
