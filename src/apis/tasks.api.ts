import { useQuery } from "@tanstack/react-query";
import httpClient from "./http-client";

const usePostTaskQuery = (queryTaskRequest: QueryTaskRequest) =>
	useQuery({
		queryKey: [
			`tasks${queryTaskRequest.limit.toString()}${queryTaskRequest.offset.toString()}`,
		],
		queryFn: async (): Promise<QueryTaskResponse> =>
			await httpClient
				.post("/tasks/query", queryTaskRequest)
				.then((r) => r.data),

		staleTime: 60 * 1000, // 1 min
		refetchOnMount: true,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	});

export { usePostTaskQuery };
