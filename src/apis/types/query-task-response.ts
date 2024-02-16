import { TaskItem } from "./task-item.type";

export type QueryTaskResponse = {
	tasks: TaskItem[];
	totalRecords: number;
};
