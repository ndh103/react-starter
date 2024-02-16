import { HttpResponse, http } from "msw";
import { faker } from "@faker-js/faker";
import { TaskItem, TaskStatus } from "@/apis/types/task-item.type";
import { QueryTaskRequest } from "@/apis/types/query-task-request";
import { QueryTaskResponse } from "@/apis/types/query-task-response";

const tasks: TaskItem[] = [];

for (let i = 0; i < 100; i++) {
	const task = {
		id: i + 1,
		name: faker.commerce.productName(),
		content: faker.commerce.productDescription(),
		dueDate: faker.date.anytime(),
		status: faker.helpers.enumValue(TaskStatus),
	} as TaskItem;

	tasks.push(task);
}

function sortBy(key: string, order: string) {
	const isAsc = order.toLowerCase() === "asc";
	// biome-ignore lint/suspicious/noExplicitAny: general sort function
	return (a: any, b: any) => {
		const result = a[key]
			.toString()
			.toLowerCase()
			.localeCompare(b[key].toString().toLowerCase());
		return isAsc ? result : -result;
	};
}

export const handlers = [
	http.post("/tasks/query", async ({ request }) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const query = (await request.json()) as QueryTaskRequest;

		let queryResult = [...tasks];

		if (query.sort?.field) {
			queryResult.sort(sortBy(query.sort.field, query.sort.order));
		}

		queryResult = queryResult.slice(query.offset).slice(0, query.limit);

		const response: QueryTaskResponse = {
			totalRecords: tasks.length,
			tasks: queryResult,
		};

		return HttpResponse.json(response);
	}),
];
