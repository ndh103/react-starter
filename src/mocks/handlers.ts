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
	http.post("/tasks/query", async ({ request }) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const query = (await request.json()) as QueryTaskRequest;

		const queryResult = tasks.slice(query.offset).slice(0, query.limit);

		const response: QueryTaskResponse = {
			totalRecords: tasks.length,
			tasks: queryResult,
		};

		return HttpResponse.json(response);
	}),
];
