export type TaskItem = {
	id: number;
	name: string;
	content: string;
	status: TaskStatus;
	dueDate: Date;
};

export enum TaskStatus {
	NotStarted = 1,
	InProgress = 2,
	Done = 3,
}
