import httpClient from "./httpClient";

const getEventListAsync = async (): Promise<EventItem[]> => {
	return await httpClient.get("/events").then((r) => r.data);
};

export { getEventListAsync };
