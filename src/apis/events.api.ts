import { useQuery } from "@tanstack/react-query";
import httpClient from "./httpClient";

const useQueryGetEventListAsync = () =>
	useQuery({
		queryKey: ["events"],
		queryFn: async (): Promise<EventItem[]> =>
			await httpClient.get("/events").then((r) => r.data),
	});

export { useQueryGetEventListAsync };
