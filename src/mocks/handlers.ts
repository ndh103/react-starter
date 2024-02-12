import { HttpResponse, http } from "msw";

export const handlers = [
	http.get("/events", () => {
		return HttpResponse.json([
			{
				Name: "Test 101",
			},
			{
				Name: "Test 102",
			},
		]);
	}),
];
