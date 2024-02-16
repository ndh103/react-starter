import { HttpResponse, http } from "msw";
import { faker } from "@faker-js/faker";

const tasks: TaskItem[] = [];

for (let i = 0; i < 100; i++) {
	const task = {
		id: i + 1,
		name: faker.commerce.productName(),
		content: faker.commerce.productDescription(),
		dueDate: faker.date.anytime(),
	} as TaskItem;

	tasks.push(task);
}

export const handlers = [
	http.get("/tasks", async () => {
		await new Promise((resolve) => setTimeout(resolve, 1500));

		return HttpResponse.json(tasks);
	}),
];
