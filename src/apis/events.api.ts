import { useQuery } from "@tanstack/react-query";
import httpClient from "./http-client";

const useQueryGetEventListAsync = () =>
	useQuery({
		queryKey: ["events"],
		queryFn: async (): Promise<EventItem[]> =>
			await httpClient.get("/events").then((r) => r.data),
		staleTime: 1 * 1000,
		refetchOnMount: true,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	});

export { useQueryGetEventListAsync };
