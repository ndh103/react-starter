import { HttpResponse, http } from "msw";
import { faker } from "@faker-js/faker";

const eventList: EventItem[] = [];

for (let i = 0; i < 100; i++) {
	const event = {
		id: i + 1,
		name: faker.commerce.productName(),
		content: faker.commerce.productDescription(),
		eventDate: faker.date.anytime(),
	} as EventItem;

	eventList.push(event);
}

export const handlers = [
	http.get("/events", async () => {
		await new Promise((resolve) => setTimeout(resolve, 1500));

		return HttpResponse.json(eventList);
	}),
];
